import React from 'react';
import { FaInbox, FaStar, FaPaperPlane, FaFileAlt, FaTag, FaTrash, FaPlus } from 'react-icons/fa';
import { IoMdTime } from 'react-icons/io';
import { IoIosArrowDown } from "react-icons/io";
import { BsPencilSquare } from 'react-icons/bs';

function Sidebar() {
    return (
        <div className="w-64 h-screen shadow-md p-4">
            {/* Compose Button */}
            <div className="flex items-center mb-6">
                <button className=" bg-gradient-to-r from-blue-400 to-blue-600 text-zinc-100 px-4 py-4 rounded-full flex items-center shadow-lg hover:shadow-xl transition-shadow hover:scale-105 duration-300 ease-in-out">
                    <BsPencilSquare className="mr-2" size={'1.5rem'} />
                    <span className="font-semibold text-lg">Compose</span>
                </button>
            </div>

            {/* Menu Items */}
            <div className="space-y-4">
                <SidebarItem icon={<FaInbox />} label="Inbox" />
                <SidebarItem icon={<FaStar />} label="Starred" />
                <SidebarItem icon={<IoMdTime />} label="Snoozed" />
                <SidebarItem icon={<FaPaperPlane />} label="Sent" />
                <SidebarItem icon={<FaFileAlt />} label="Drafts" />
                <SidebarItem icon={<FaTag />} label="Labels" />
                <SidebarItem icon={<FaTrash />} label="Trash" />
                <SidebarItem icon={<IoIosArrowDown />} label="More" />

                {/* Add More Labels */}
                <div className="pt-4">
                    <button className="flex items-center text-gray-700 hover:text-blue-500">
                        <FaPlus className="mr-2" size={'1rem'} />
                        <span>Add Label</span>
                    </button>
                </div>
            </div>
        </div>
    );
}

function SidebarItem({ icon, label }) {
    return (
        <div className="flex items-center space-x-3 text-gray-700 hover:bg-gray-100 p-2 rounded-lg cursor-pointer">
            {icon}
            <span>{label}</span>
        </div>
    );
}

export default Sidebar;
