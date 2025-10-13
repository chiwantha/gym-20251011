import MenuTitle from "@/components/button/menuTile/MenuTitle";
import React from "react";
import {
  FiUsers,
  FiHome,
  FiPackage,
  FiUserCheck,
  FiBookOpen,
  FiRefreshCw,
  FiDollarSign,
  FiBarChart2,
  FiClock,
  FiCheckSquare,
  FiCpu,
  FiUser,
  FiShield,
} from "react-icons/fi";
import { BsFillGrid1X2Fill } from "react-icons/bs";
import Link from "next/link";

const allMenuItems = [
  { title: "Members", icon: <FiUsers />, path: "/master/members" },
  { title: "Facilities", icon: <FiHome />, path: "/master/facilities" },
  { title: "Packages", icon: <FiPackage />, path: "/master/packages" },
  { title: "Trainers", icon: <FiUserCheck />, path: "/master/trainers" },
  {
    title: "Admissions",
    icon: <FiBookOpen />,
    path: "/transactions/admissions",
  },
  { title: "Renewal", icon: <FiRefreshCw />, path: "/transactions/renewal" },
  { title: "Sales", icon: <FiDollarSign />, path: "/reports/sales" },
  { title: "Outstanding", icon: <FiBarChart2 />, path: "/reports/outstanding" },
  { title: "Expiry", icon: <FiClock />, path: "/reports/expiry" },
  { title: "Attendance", icon: <FiCheckSquare />, path: "/reports/attendance" },
  { title: "Devices", icon: <FiCpu />, path: "/settings/devices" },
  { title: "Users", icon: <FiUser />, path: "/settings/users" },
];

const Menu = () => {
  return (
    <div
      className=" min-h-[calc(100vh-82px)] flex items-center justify-center
      p-4"
    >
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 ">
        {/* Dashboard */}
        <Link
          href="/dashboard"
          className="group flex flex-col items-center justify-center 
        rounded-xl border border-[#4364BF]/40 bg-[#4364BF] group-hover
       hover:border-[#4364BF]
        transition-all duration-200 shadow-sm hover:shadow-md
        p-8 text-center cursor-pointer lg:col-span-6 md:col-span-4 sm:col-span-3 col-span-2"
        >
          {/* Icon */}
          <div
            className="text-3xl group-hover:scale-110 
          transition-transform duration-200 text-white"
          >
            {<BsFillGrid1X2Fill />}
          </div>

          {/* Title */}
          <span className="mt-2 text-sm font-medium text-slate-200">
            {"Dashboard"}
          </span>
        </Link>

        {/* Other Menu Items */}
        {allMenuItems.map((btn, index) => (
          <MenuTitle key={index} btn={btn} />
        ))}
      </div>
    </div>
  );
};

export default Menu;
