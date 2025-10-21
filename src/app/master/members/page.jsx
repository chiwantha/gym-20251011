"use client";
import MstMemberCard from "@/components/cards/mstMember/MstMemberCard";
import DataGrid from "@/components/dataGrid/DataGrid";
import MembersForm from "@/components/forms/members/MembersForm";
import ActionTray from "@/components/layout/actionTray/ActionTray";
import { useEffect, useState } from "react";

const MstMemberspage = () => {
  const [isTrayOpen, setIsTrayOpen] = useState(false);
  const [editData, setEditData] = useState(null);
  const [form, setForm] = useState(null);
  const [members, setMembers] = useState([]);
  const [pending, setPending] = useState(true);

  useEffect(() => {
    async function getMembers() {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_APP_URL}/api/master/members`
        );

        if (!res.ok) {
          console.error(`Error Loads Data !`);
          return { members: [] };
        }

        const memberData = await res.json();
        setMembers(memberData.members || []);
        return;
      } catch (err) {
        console.error(`Error Fetch Data !`);
        return { members: [] };
      } finally {
        setPending(false);
      }
    }
    getMembers();
    console.log(members);
  }, []);

  const handleOpen = (e) => {
    const { action } = e;
    // alert(action);
    if (action == `edit`) {
      setIsTrayOpen(true);
      setEditData(e);
      setForm(<MembersForm data={e} />);
    } else if (action == `new`) {
      setIsTrayOpen(true);
      setEditData(null);
      setForm(<MembersForm data={false} />);
    }
  };

  return (
    <div className="flex flex-col gap-4">
      {/* Data Grid */}

      <DataGrid
        title={`Members`}
        newClick={handleOpen}
        searchKeys={["name", "phone"]}
        itemsPerPage={20}
        pending={pending}
      >
        {members.map((member, index) => (
          <MstMemberCard key={index} props={member} onEdit={handleOpen} />
        ))}
      </DataGrid>

      <ActionTray
        title={`Members`}
        state={isTrayOpen}
        data={editData}
        closeTray={setIsTrayOpen}
        form={form}
      />
    </div>
  );
};

export default MstMemberspage;
