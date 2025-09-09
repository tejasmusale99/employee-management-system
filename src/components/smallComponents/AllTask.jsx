import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

export const AllTask = () => {
  const authData = useContext(AuthContext);
//   console.log(authData.employees);
  return (
    <div className="bg-[#1c1c1c p-5 rounded mt-2">
      <div className="bg-red-400 py-2 px-4 flex mb-2 justify-between rounded">
        <h2 className="text-lg font-medium">Employee Name</h2>
        <h3 className="text-lg font-medium">New Task</h3>
        <h5 className="text-lg font-medium">Active Task</h5>
        <h5 className="text-lg font-medium">Completed Task</h5>
        <h5 className="text-lg font-medium">Failed Task</h5>
      </div>
      <div className="overflow-auto h-[80%] no-scrollbar">
      {authData.employees.map((emp,idx) => {
        return (
          <div key={idx} className="py-2 px-4 flex mb-2 justify-between rounded border-2 border-amber-100">
            <h3 className="text-amber-50 text-lg font-medium">{emp.firstName}</h3>
            <h3 className="text-amber-400 text-lg font-medium">{emp.taskCount.newTask}</h3>
            <h3 className="text-amber-50 text-lg font-medium">{emp.taskCount.active}</h3>
            <h3 className="text-green-500 text-lg font-medium">{emp.taskCount.completed}</h3>
            <h3 className="text-red-600 text-lg font-medium">{emp.taskCount.failed}</h3>
          </div>
        );
       
      })}
       </div>
    </div>
  );
};
