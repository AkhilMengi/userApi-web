import UserTable from "./UserTable";
import SideNav from "./utils/SideNav";

const AdminProfile = () => {
  return (
    <div className="flex h-screen">
      <SideNav />
      <div className="flex-1 p-6 overflow-auto">
        <UserTable />
      </div>
    </div>
  );
};

export default AdminProfile;

