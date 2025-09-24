import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { IoIosArrowBack, IoIosArrowDown } from "react-icons/io";

const UserDropdown = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative inline-block text-left">
      {/* Trigger Button */}
      <div
        onClick={() => setOpen(!open)}
        className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 cursor-pointer transition-all duration-600"
      >
        {/* Avatar */}
        <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center text-white font-bold">
          JD
        </div>

        {/* Name & Role */}
        <div className=" flex-col hidden md:flex">
          <span className="font-medium text-gray-800">John Doe</span>
          <span className="text-sm text-gray-500">Admin</span>
        </div>

        <div className="w-4 hidden md:flex"></div>

        {/* Chevron Icon */}
        <IoIosArrowDown
          className={`text-gray-500 transition-transform duration-600 ${
            open ? "rotate-180" : ""
          }`}
        />
      </div>

      {/* Dropdown Menu */}

      <div
  className={`absolute mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-50 overflow-hidden transition-all duration-300 ${
    open
      ? "opacity-100 translate-y-0 -translate-x-28 sm:-translate-x-0 pointer-events-auto"
      : "opacity-0 -translate-y-2 pointer-events-none"
  }`}
>
  <ul className="text-sm text-gray-700">
    <li className="px-4 py-3 hover:bg-gray-100 cursor-pointer">Profile</li>
    <li className="px-4 py-3 hover:bg-gray-100 cursor-pointer">Settings</li>
    <li className="border-t border-gray-200 px-4 py-3 hover:bg-red-100 text-red-600 cursor-pointer">
      Logout
    </li>
  </ul>
</div>


    </div>
  );
};

export default UserDropdown;
