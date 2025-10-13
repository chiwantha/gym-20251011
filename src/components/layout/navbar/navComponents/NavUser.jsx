"use client";
import { useState } from "react";
import { FaUser } from "react-icons/fa";

const NavUser = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="h-[70%]">
      <div
        onClick={() => {
          setIsOpen(!isOpen);
        }}
        className={`relative rounded-lg aspect-square h-full
     items-center justify-center
    transition-all duration-300 cursor-pointer
     flex  text-xl ${
       isOpen ? `bg-[#4364BF] text-slate-100` : `text-[#4364BF] bg-gray-200`
     }`}
      >
        <FaUser />
      </div>
      {isOpen && (
        <div className="absolute top-[120%] right-4 bg-white shadow-md border border-gray-300 rounded-md w-40">
          <ul className="flex flex-col">
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
              Profile
            </li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
              Settings
            </li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
              Logout
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default NavUser;
