"use client";
import NavBtn from "@/components/buttons/navBtn/NavBtn";
import { useSidebar } from "@/context/SidebarContext";
import { FiMenu } from "react-icons/fi";
import { IoClose } from "react-icons/io5";

const SidebarToggle = () => {
  const { isOpen, toggleSidebar } = useSidebar();
  return (
    <div className="flex h-[70%] md:hidden">
      <NavBtn
        click={toggleSidebar}
        icon={<FiMenu />}
        activeicon={<IoClose />}
        state={isOpen}
      />
    </div>
  );
};

export default SidebarToggle;
