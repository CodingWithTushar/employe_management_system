
import CreateTasksAdmin from "../../pages/CreateTasksAdmin";
import AdminHeader from "../SmallComponents/AdminHeader";
import AllTasksAdmin from "../SmallComponents/AllTasksAdmin";

const AdminDashBoard = ({Data}) => {
console.log(Data)

  return <>
  <div className="h-screen p-10 bg-gradient-to-t from-[#393636] bg-[#1c1c1c] ">
      <AdminHeader/>
      <CreateTasksAdmin/>
      <AllTasksAdmin/>
  </div>
  </> 


};

export default AdminDashBoard;
