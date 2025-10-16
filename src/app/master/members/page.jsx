import MstMemberCard from "@/components/cards/mstMember/MstMemberCard";
import DataGrid from "@/components/dataGrid/DataGrid";
import { gymMembers } from "@/constant/Dummy";

const MstMemberspage = () => {
  return (
    <div className="flex flex-col gap-4">
      {/* Data Grid */}
      <DataGrid title={`Members`}>
        {gymMembers.map((member, index) => (
          <MstMemberCard key={index} props={member} />
        ))}
      </DataGrid>
    </div>
  );
};

export default MstMemberspage;
