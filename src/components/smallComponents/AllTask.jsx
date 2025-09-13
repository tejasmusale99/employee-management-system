import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

export const AllTask = () => {
  const authData = useContext(AuthContext);

  return (
    <div className="bg-[#1c1c1c] p-5 rounded mt-2">
      {/* Outer container allows both scrollbars */}
      <div className="relative max-h-[70vh] overflow-x-auto overflow-y-auto rounded no-scrollbar">
        <table className="min-w-[700px] w-full border-collapse">
          {/* Sticky Header */}
          <thead className="sticky top-0 z-10 bg-red-400">
            <tr>
              <th className="py-2 px-4 text-sm md:text-lg font-medium text-left whitespace-nowrap">
                Employee Name
              </th>
              <th className="py-2 px-4 text-sm md:text-lg font-medium text-center whitespace-nowrap">
                New Task
              </th>
              <th className="py-2 px-4 text-sm md:text-lg font-medium text-center whitespace-nowrap">
                Active Task
              </th>
              <th className="py-2 px-4 text-sm md:text-lg font-medium text-center whitespace-nowrap">
                Completed Task
              </th>
              <th className="py-2 px-4 text-sm md:text-lg font-medium text-center whitespace-nowrap">
                Failed Task
              </th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody>
            {authData.employees.map((emp, idx) => (
              <tr
                key={idx}
                className="border-b border-amber-100 text-center"
              >
                <td className="py-2 px-4 text-amber-50 text-sm md:text-lg font-medium text-left truncate">
                  {emp.firstName}
                </td>
                <td className="py-2 px-4 text-amber-400 text-sm md:text-lg font-medium">
                  {emp.taskCount.newTask}
                </td>
                <td className="py-2 px-4 text-amber-50 text-sm md:text-lg font-medium">
                  {emp.taskCount.active}
                </td>
                <td className="py-2 px-4 text-green-500 text-sm md:text-lg font-medium">
                  {emp.taskCount.completed}
                </td>
                <td className="py-2 px-4 text-red-600 text-sm md:text-lg font-medium">
                  {emp.taskCount.failed}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
