"use client";
import NavBtn from "@/components/buttons/navBtn/NavBtn";
import { MdInsertChart } from "react-icons/md";
import { FaUserAlt } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import { useState } from "react";
import ActionTray from "@/components/layout/actionTray/ActionTray";

const subClass = ` text-gray-600  `;

const MstMemberCard = ({ props }) => {
  const [trayOpens, setTrayOpens] = useState(false);
  const { id, name, gender, dob, phone } = props || {};
  return (
    <div className=" mt-10">
      <div className="relative  p-4 rounded-lg border border-[#4364BF]/40  bg-slate-100">
        <div className="absolute top-[-35px] right-[102px] flex items-center gap-1.5 h-[30px]  ">
          <NavBtn icon={<FaUserAlt />} link={`#`} />
          <NavBtn icon={<MdInsertChart />} link={`#`} />
          <NavBtn
            icon={<MdEdit />}
            click={() => {
              setTrayOpens(true);
            }}
          />
        </div>
        {/* image */}
        <div className="absolute top-[-40px] right-4 w-20 h-20 aspect-square rounded-lg border border-[#4364BF]/40 bg-slate-50"></div>
        <div className="flex flex-col overflow-hidden">
          <span className={`${subClass}`}>{id || 0}</span>
          <span className={`${subClass}`}>{gender ? `Male` : `Female`}</span>
          <span className="text-ellipsis whitespace-nowrap font-medium uppercase text-xl">
            {name || `Unknown Name`}
          </span>
          <span className={`${subClass}`}>{dob || `0000 - 00 - 00`}</span>
          <span className={`${subClass}`}>{phone || `07xxxxxxxx`}</span>
        </div>
      </div>
      <ActionTray
        state={trayOpens}
        closeTray={setTrayOpens}
        title={`Edit Member`}
        children={<span>{JSON.stringify(props)}</span>}
      />
    </div>
  );
};

export default MstMemberCard;
