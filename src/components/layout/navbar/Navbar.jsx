import { companyInfo } from "@/constant/Company";
import Image from "next/image";
import NavUser from "./navComponents/NavUser";
import SidebarToggle from "./navComponents/SidebarToggle";

const Navbar = () => {
  return (
    <div
      className="bg-[#f5f5f5] h-[50px] flex items-center fixed top-0 left-0 w-full
      justify-between shadow-md px-4 z-50 border-b border-[#4364BF]/40"
    >
      <div className="relative h-[55%] w-[130px] aspect-auto">
        <Image
          src={companyInfo.logo}
          alt="logo"
          fill
          className="object-contain"
        />
      </div>
      <div className="flex gap-4 h-full items-center">
        <NavUser />
        <SidebarToggle />
      </div>
    </div>
  );
};

export default Navbar;
