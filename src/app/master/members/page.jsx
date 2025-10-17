"use client";
import MstMemberCard from "@/components/cards/mstMember/MstMemberCard";
import DataGrid from "@/components/dataGrid/DataGrid";
import ActionTray from "@/components/layout/actionTray/ActionTray";
import { gymMembers } from "@/constant/Dummy";
import { useState } from "react";

const MstMemberspage = () => {
  const [isTrayOpen, setIsTrayOpen] = useState(false);
  const [editData, setEditData] = useState(null);

  const handleOpen = (e) => {
    const { action } = e;
    // alert(action);
    if (action == `edit`) {
      setIsTrayOpen(true);
      setEditData(e);
    } else if (action == `new`) {
      setIsTrayOpen(true);
      setEditData(null);
    }
  };

  return (
    <div className="flex flex-col gap-4">
      {/* Data Grid */}
      <DataGrid title={`Members`} newClick={handleOpen}>
        {gymMembers.map((member, index) => (
          <MstMemberCard key={index} props={member} onEdit={handleOpen} />
        ))}
      </DataGrid>
      <ActionTray
        title={`Members`}
        state={isTrayOpen}
        data={editData}
        closeTray={setIsTrayOpen}
      />
    </div>
  );
};

export default MstMemberspage;
