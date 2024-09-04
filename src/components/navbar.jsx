import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { RxHamburgerMenu } from "react-icons/rx";
import { FaRegQuestionCircle } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { TbGridDots } from "react-icons/tb";
import { faUserCircle, faSearch } from '@fortawesome/free-solid-svg-icons';
import GoogleLogo from './googleLogo';

function Navbar() {
    return (
        <nav className="bg-[#F6F8FC] shadow-md px-4 py-2 flex items-center justify-between">
            <div className="flex items-center justify-center mr-0 pr-0">
                <RxHamburgerMenu size={'2.8rem'} className="hover:bg-[#E8EAED] rounded-full p-2 cursor-pointer" />
                {/* Google Logo */}
                <div className="p-2 w-[100px]">
                    <GoogleLogo />
                </div>

                {/* Navigation Links */}
                <div className="hidden md:flex space-x-4">
                    <a href="#" className="text-gray-700 hover:text-blue-500">Inbox</a>
                    <a href="#" className="text-gray-700 hover:text-blue-500">Starred</a>
                    <a href="#" className="text-gray-700 hover:text-blue-500">Sent</a>
                    <a href="#" className="text-gray-700 hover:text-blue-500">Drafts</a>
                </div>
            </div>

            {/* Search Bar */}
            <div className="flex-1 mx-4 max-w-2xl">
                <div className="relative">
                    <FontAwesomeIcon  icon={faSearch} className=" hover:bg-[#E8EAED] rounded-full p-2 cursor-pointer absolute top-4 left-2 text-gray-600 px-1" />
                    <input
                        type="text"
                        placeholder="Search mail"
                        className="w-full px-8 py-2 pt-4 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 bg-[#EAF1FB]"
                    />
                </div>
            </div>

            {/* Icons */}
            <div className="flex items-center space-x-4">
                <FaRegQuestionCircle className="text-gray-700 hover:bg-[#E8EAED] rounded-full p-2 cursor-pointer hover:text-blue-500" size={'2.5rem'} />
                <IoSettingsOutline className="text-gray-700 hover:bg-[#E8EAED] rounded-full p-2 cursor-pointer hover:text-blue-500" size={'2.5rem'} />
                <TbGridDots className="text-gray-700 hover:bg-[#E8EAED] rounded-full p-2 cursor-pointer hover:text-blue-500" size={'2.5rem'} />
                 <FontAwesomeIcon icon={faUserCircle} className="text-gray-700 hover:bg-[#E8EAED] rounded-full p-2 cursor-pointer hover:text-blue-500 text-2xl" size={'2.8rem'} /> 
                  {/* // we can use npm packadge for adding avatar as react-avatar which take src as avatar or we can use img tag too  */}
            </div>
        </nav>
    );
}

export default Navbar;
