"use client";
import NavBtn from "@/components/buttons/navBtn/NavBtn";
import { useState } from "react";
import { FaUser } from "react-icons/fa";

const NavUser = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="h-[70%] flex gap-4">
      <NavBtn
        icon={<FaUser />}
        click={() => {
          setIsOpen(!isOpen);
        }}
        state={isOpen}
      />
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
