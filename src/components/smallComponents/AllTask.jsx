import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

export const AllTask = () => {
  const authData = useContext(AuthContext);
  console.log(authData.employees);
  return (
    <div className="bg-[#1c1c1c p-5 rounded h-48  mt-2">
      <div className="bg-red-400 py-2 px-4 flex mb-2 justify-between rounded">
        <h2>Employee Name</h2>
        <h3>New Task</h3>
        <h5>Active Task</h5>
        <h5>Completed Task</h5>
        <h5>Failed Task</h5>
      </div>
      <div className="overflow-auto h-[80%] no-scrollbar">
      {authData.employees.map((emp) => {
        return (
          <div className="bg-red-400 py-2 px-4 flex mb-2 justify-between rounded">
            <h3>{emp.firstName}</h3>
            <h3>{emp.taskCount.newTask}</h3>
            <h3>{emp.taskCount.active}</h3>
            <h3>{emp.taskCount.completed}</h3>
            <h3>{emp.taskCount.failed}</h3>
          </div>
        );
       
      })}
       </div>
    </div>
  );
};
