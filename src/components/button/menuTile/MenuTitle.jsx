import Link from "next/link";
import React from "react";

const MenuTitle = ({ btn }) => {
  const { title, icon, path } = btn;

  return (
    <Link href={path}>
      <div
        className="group flex flex-col items-center justify-center 
        rounded-xl border border-[#4364BF]/40 bg-white group-hover
        hover:bg-[#4364BF] hover:border-[#4364BF]
        transition-all duration-200 shadow-sm hover:shadow-md
        p-4 text-center cursor-pointer aspect-square"
      >
        {/* Icon */}
        <div
          className="text-3xl text-[#4364BF] group-hover:scale-110 
          transition-transform duration-200 group-hover:text-white"
        >
          {icon}
        </div>

        {/* Title */}
        <span
          className="mt-2 text-sm font-medium text-gray-600 
           group-hover:text-slate-200"
        >
          {title}
        </span>
      </div>
    </Link>
  );
};

export default MenuTitle;
