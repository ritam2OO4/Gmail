import React, { useState } from 'react';
import { RxCross2 } from "react-icons/rx";
import { useDispatch, useSelector } from 'react-redux';
import { setOpen } from '../redux/appSlice';
import { db } from '../firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const SendEmail = () => {
  const [formData, setFormData] = useState({
    recipients: "",
    subject: "",
    message: ""
  });
  const [feedbackMessage, setFeedbackMessage] = useState("");
  const { open } = useSelector(store => store.app);
  const dispatch = useDispatch();

  const changeEventHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  const submitHandler = async (e) => {
    e.preventDefault();

    // Validate form data
    if (!formData.recipients || !formData.subject || !formData.message) {
      setFeedbackMessage("All fields are required.");
      return;
    }

    try {
      // Ensure the user is authenticated
      const user = getAuth().currentUser;

      if (user) {
        // Perform Firestore write operation
        await addDoc(collection(db, "emails"), {
          to: formData.recipients,
          subject: formData.subject,
          message: formData.message,
          createdAt: serverTimestamp(),
        });
        setFeedbackMessage("Email sent successfully!");
        dispatch(setOpen(false));
        setFormData({
          recipients: "",
          subject: "",
          message: ""
        });
      } else {
        setFeedbackMessage("User is not authenticated.");
      }
    } catch (error) {
      console.error('Error adding document: ', error);
      setFeedbackMessage("Error adding document: " + error.message);
    }
  }

  return (
    <div className={`${open ? 'block' : 'hidden'} bg-white max-w-6xl shadow-xl shadow-slate-600 rounded-t-md`}>
      <div className='flex px-3 py-2 bg-[#F2F6FC] items-center justify-between rounded-t-md'>
        <h1>New Message</h1>
        <div onClick={() => dispatch(setOpen(false))} className='p-2 rounded-full hover:bg-gray-200 cursor-pointer'>
          <RxCross2 />
        </div>
      </div>
      <form onSubmit={submitHandler} className='flex flex-col p-3 gap-2'>
        <input
          onChange={changeEventHandler}
          name="recipients"
          value={formData.recipients}
          type="text"
          placeholder='Recipients'
          className='outline-none py-1'
        />
        <input
          onChange={changeEventHandler}
          name="subject"
          value={formData.subject}
          type="text"
          placeholder='Subject'
          className='outline-none py-1'
        />
        <textarea
          onChange={changeEventHandler}
          name="message"
          value={formData.message}
          cols="30"
          rows="10"
          className='outline-none py-1'
        />
        <button
          type='submit'
          className='bg-[#0B57D0] rounded-full w-fit px-4 py-1 text-white font-medium'
        >
          Send
        </button>
        {feedbackMessage && <p className='mt-2 text-red-600'>{feedbackMessage}</p>}
      </form>
    </div>
  );
}

export default SendEmail;
