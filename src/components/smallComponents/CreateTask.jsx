import React from "react";

export const CreateTask = () => {
  return (
    <div>
      <form
        action=""
        className="border border-gray-700 bg-[#2a2a2a] rounded-xl p-6 mt-10 max-w-6xl mx-auto flex flex-col gap-6"
      >
        <div className="flex flex-col md:flex-row gap-5">
          <div className="flex flex-col w-full md:w-1/2">
            <label htmlFor="taskTitle" className="text-white text-sm mb-1">
              Task Title
            </label>
            <input
              id="taskTitle"
              name="taskTitle"
              type="text"
              placeholder="Enter your task"
              className="px-4 py-2 rounded bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>

          <div className="flex flex-col w-full md:w-1/2">
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
        </div>

        <div className="flex flex-col md:flex-row gap-5">
          <div className="flex flex-col w-full md:w-1/2">
            <label htmlFor="assignTo" className="text-white text-sm mb-1">
              Assign To
            </label>
            <input
              id="assignTo"
              name="assignTo"
              type="text"
              placeholder="Employee Name"
              className="px-4 py-2 rounded bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>

          <div className="flex flex-col w-full md:w-1/2">
            <label htmlFor="category" className="text-white text-sm mb-1">
              Category
            </label>
            <input
              id="category"
              name="category"
              type="text"
              placeholder="Design, Dev, etc"
              className="px-4 py-2 rounded bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>
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
            className="px-4 py-2 rounded bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-emerald-500"
          ></textarea>
        </div>

        <div className="text-right">
          <button
            type="submit"
            className="mt-2 py-2 px-6 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-lg shadow-md transition duration-300"
          >
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
