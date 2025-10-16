"use client";

import Link from "next/link";

const btnStyle = `rounded-lg aspect-square h-full
     items-center justify-center
    transition-all duration-300 cursor-pointer
     flex  text-xl p-2 `;

const NavBtn = ({ click, link, icon, activeicon, state }) => {
  const btn_face = state
    ? `bg-[#4364BF] text-slate-100`
    : `text-[#4364BF] bg-gray-200`;
  if (link) {
    return (
      <Link href={link} prefetch={true} className={`${btnStyle} ${btn_face}`}>
        <span>{icon}</span>
      </Link>
    );
  }

  if (click) {
    return (
      <button onClick={click} className={`${btnStyle} ${btn_face}`}>
        <span>{state ? activeicon || icon : icon}</span>
      </button>
    );
  }
};

export default NavBtn;
