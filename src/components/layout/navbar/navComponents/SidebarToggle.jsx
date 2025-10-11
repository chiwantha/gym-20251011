"use client";
import { useSidebar } from "@/context/SidebarContext";
import { FiMenu } from "react-icons/fi";
import { IoClose } from "react-icons/io5";

const SidebarToggle = () => {
  const { isOpen, toggleSidebar } = useSidebar();
  return (
    <button className="md:hidden block aspect-square" onClick={toggleSidebar}>
      <span className="text-3xl font-black">
        {isOpen ? <IoClose /> : <FiMenu />}
      </span>
    </button>
  );
};

export default SidebarToggle;
