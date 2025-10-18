"use client";
import {
  FiHome,
  FiFolder,
  FiUsers,
  FiPackage,
  FiUser,
  FiRepeat,
  FiClipboard,
  FiSettings,
  FiMonitor,
  FiUserCheck,
  FiShield,
  FiDollarSign,
} from "react-icons/fi";
import { BsFillGrid1X2Fill } from "react-icons/bs";
import SidebarItem from "./sidebarItem/SidebarItem";
import { useSidebar } from "@/context/SidebarContext";

export const items = [
  {
    title: "Dashboard",
    path: "/",
    icon: <BsFillGrid1X2Fill />,
    active: true,
  },
  {
    title: "Menu",
    path: "/menu",
    icon: <FiHome />,
    active: false,
  },
  {
    title: "Master",
    path: false,
    icon: <FiFolder />,
    subItems: [
      { title: "Members", path: "/master/members", icon: <FiUsers /> },
      { title: "Facilities", path: "/master/facilities", icon: <FiMonitor /> },
      { title: "Packages", path: "/master/packages", icon: <FiPackage /> },
      { title: "Trainers", path: "/master/trainers", icon: <FiUserCheck /> },
    ],
    active: false,
  },
  {
    title: "Transactions",
    path: false,
    icon: <FiDollarSign />,
    subItems: [
      {
        title: "Admissions",
        path: "/transactions/admissions",
        icon: <FiClipboard />,
      },
      { title: "Renewal", path: "/transactions/payments", icon: <FiRepeat /> },
    ],
    active: false,
  },
  {
    title: "Reports",
    path: "/reports",
    icon: <FiClipboard />,
    active: false,
  },

  {
    title: "Settings",
    path: false,
    icon: <FiSettings />,
    subItems: [
      { title: "Devices", path: "/settings/devices", icon: <FiMonitor /> },
      { title: "Users", path: "/settings/users", icon: <FiUser /> },
      { title: "Roles", path: "/settings/roles", icon: <FiShield /> },
      {
        title: "Access Control",
        path: "/settings/access-control",
        icon: <FiShield />,
      },
    ],
    active: false,
  },
];

const Sidebar = () => {
  const { isOpen, isMobile, closeSidebar } = useSidebar();
  return (
    <div
      className={`fixed  top-[50px] md:sticky left-0  overflow-y-auto
            h-[calc(100vh-50px)] bg-gray-100 w-64 border-r z-50
             border-[#4364BF]/40 transition-all duration-300
             ${
               isOpen
                 ? "w-64 translate-x-0"
                 : "w-0 -translate-x-full md:translate-x-0 md:w-16"
             }`}
    >
      <div className="flex flex-col gap-2  px-4 py-6 ">
        {items.map((item, index) => (
          <SidebarItem key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
