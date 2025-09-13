// import React, { useState } from "react";
import React, { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

export const CreateTask = () => {

const { refreshData } = useContext(AuthContext);

  const [title, setTaskTitle] = useState("");
  const [date, setTaskDate] = useState("");
  const [taskAssignTo, setTaskAssignTo] = useState("");
  const [category, setTaskCategory] = useState("");
  const [description, setTaskDescription] = useState("");

  const [newTask, setnewTask] = useState({});

  function resetForm() {
    setTaskTitle("");
    setTaskDate("");
    setTaskAssignTo("");
    setTaskCategory("");
    setTaskDescription("");
  }

  function submitHandler(e) {
    e.preventDefault();
    // console.log("Task created", taskTitle,taskDate,taskAssignTo,taskCategory);

    const taskObj = {
      title,
      date,
      taskAssignTo,
      category,
      description,
      newTask: true,
      active: false,
      failed: false,
      completed: false,
    };

    setnewTask(taskObj);

    const employeesData = JSON.parse(localStorage.getItem("employees"));

    // console.log(employeesData);

    employeesData.forEach((elem)=>{
      if(taskAssignTo == elem.firstName){
        elem.tasks.push(taskObj)
        elem.taskCount.active = elem.taskCount.active + 1
      }
    });

    console.log(employeesData);
    
    localStorage.setItem('employees',JSON.stringify(employeesData))
    
    refreshData();
    resetForm();
  }

  return (
    <div>
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
        className="border border-gray-700 bg-[#2a2a2a] rounded-xl p-6 mt-10 max-w-6xl mx-auto flex flex-col gap-6"
      >
        <div className="flex flex-col md:flex-row gap-5">
          <div className="flex flex-col w-full md:w-1/2">
            <label htmlFor="taskTitle" className="text-white text-sm mb-1">
              Task Title
            </label>
            <input
              onChange={(e) => {
                setTaskTitle(e.target.value);
              }}
              value={title}
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
              onChange={(e) => {
                setTaskDate(e.target.value);
              }}
              value={date}
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
              onChange={(e) => {
                setTaskAssignTo(e.target.value);
              }}
              value={taskAssignTo}
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
              onChange={(e) => {
                setTaskCategory(e.target.value);
              }}
              value={category}
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
            onChange={(e) => {
              setTaskDescription(e.target.value);
            }}
            value={description}
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
