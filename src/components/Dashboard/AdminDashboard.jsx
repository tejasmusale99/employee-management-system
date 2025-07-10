import { AllTask } from "../smallComponents/AllTask";
import CreateTask from "../smallComponents/CreateTask";
import Header from "../smallComponents/Header";

export const AdminDashboard = () => {
  return (
    <div className="p-5 md:p-10 min-h-screen w-full bg-[#1c1c1c]">
      <Header />
      <CreateTask />
      <AllTask />
    </div>
  );
};
