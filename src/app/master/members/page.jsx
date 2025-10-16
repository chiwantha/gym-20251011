import MstMemberCard from "@/components/cards/mstMember/MstMemberCard";
import DataGrid from "@/components/dataGrid/DataGrid";

const MstMemberspage = () => {
  return (
    <div className="flex flex-col gap-4">
      {/* Data Grid */}
      <DataGrid title={`Members`}>
        <MstMemberCard />
        <MstMemberCard />
        <MstMemberCard />
        <MstMemberCard />
        <MstMemberCard />
        <MstMemberCard />
        <MstMemberCard />
        <MstMemberCard />
        <MstMemberCard />
        <MstMemberCard />
      </DataGrid>
    </div>
  );
};

export default MstMemberspage;
