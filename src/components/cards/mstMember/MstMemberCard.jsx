import NavBtn from "@/components/buttons/navBtn/NavBtn";
import { FaLock } from "react-icons/fa";

import { MdInsertChart } from "react-icons/md";
import { FaUserAlt } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import Image from "next/image";

const subClass = ` text-gray-600  `;

const MstMemberCard = ({ props, onEdit }) => {
  const { id, name, gender, dob, phone, image } = props || {};
  return (
    <div className="mt-10">
      <div className="relative  p-4 rounded-lg border border-[#4364BF]/40  bg-slate-100">
        {/* Adction */}
        <div className="absolute top-[-35px] right-[102px] flex items-center gap-1.5 h-[30px]  ">
          <NavBtn icon={<FaLock />} link={`/master/members/${id}/access`} />
          <NavBtn icon={<FaUserAlt />} link={`/master/members/${id}`} />
          <NavBtn icon={<MdInsertChart />} link={`#`} />
          <NavBtn
            icon={<MdEdit />}
            click={() => {
              onEdit({ action: `edit`, ...props });
            }}
          />
        </div>
        {/* image */}
        <div className="absolute top-[-40px] right-4 w-20 h-20 aspect-square rounded-lg border border-[#4364BF]/40 bg-slate-50 overflow-hidden">
          <Image
            src={`/uploads/members/${image}`}
            alt={name}
            fill
            className="object-contain"
          />
        </div>
        {/* Data */}
        <div className="flex flex-col overflow-hidden">
          <span className={`${subClass}`}>{id || 0}</span>
          <span className={`${subClass}`}>{gender ? `Male` : `Female`}</span>
          <span className="text-ellipsis whitespace-nowrap font-medium uppercase text-xl">
            {name || `Unknown Name`}
          </span>
          <span className={`${subClass}`}>
            {dob.split("T")[0] || `0000 - 00 - 00`}
          </span>
          <span className={`${subClass}`}>{phone || `07xxxxxxxx`}</span>
        </div>
      </div>
    </div>
  );
};

export default MstMemberCard;
