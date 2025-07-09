import Header from "../smallComponents/Header";

export const AdminDashboard = () => {
  return (
    <div className="p-5 md:p-10 min-h-screen w-full bg-[#1c1c1c]">
      <Header />
      <form
        action=""
        className="border border-gray-700 flex flex-col gap-5 w-full max-w-2xl p-6 rounded-xl mt-10 bg-[#2a2a2a] mx-auto"
      >
        
        <div className="flex flex-col">
          <label htmlFor="taskTitle" className="text-white text-sm mb-1">
            Task Title
          </label>
          <input
            id="taskTitle"
            name="taskTitle"
            type="text"
            placeholder="Enter your task"
            className="w-full px-4 py-2 rounded bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />
        </div>

        
        <div className="flex flex-col">
          <label htmlFor="description" className="text-white text-sm mb-1">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            rows={4}
            placeholder="Enter description here"
            className="w-full px-4 py-2 rounded bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-emerald-500"
          ></textarea>
        </div>

       
        <div className="flex flex-col">
          <label htmlFor="date" className="text-white text-sm mb-1">
            Date
          </label>
          <input
            id="date"
            name="date"
            type="date"
            className="px-4 py-2 rounded bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />
        </div>

        
        <div className="flex flex-col">
          <label htmlFor="assignTo" className="text-white text-sm mb-1">
            Assign To
          </label>
          <input
            id="assignTo"
            name="assignTo"
            type="text"
            placeholder="Employee Name"
            className="w-full px-4 py-2 rounded bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />
        </div>


        <div className="flex flex-col">
          <label htmlFor="category" className="text-white text-sm mb-1">
            Category
          </label>
          <input
            id="category"
            name="category"
            type="text"
            placeholder="Design, Dev, etc"
            className="w-full px-4 py-2 rounded bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />
        </div>

        <button
          type="submit"
          className="mt-4 w-full py-2 px-4 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-lg shadow-md transition duration-300"
        >
          Create Task
        </button>
      </form>
    </div>
  );
};
