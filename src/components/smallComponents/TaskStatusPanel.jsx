export const TaskStatusPanel = ({data}) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 sm:p-6 lg:p-10">
      <div className="bg-amber-600 rounded-2xl p-6 sm:p-8 flex flex-col items-start">
        <h1 className="text-white text-4xl sm:text-5xl font-bold">{data.taskCount.newTask}</h1>
        <h1 className="text-white text-xl sm:text-2xl font-semibold pt-2">
          New Task
        </h1>
      </div>
      <div className="bg-green-400 rounded-2xl p-6 sm:p-8 flex flex-col items-start">
        <h1 className="text-white text-4xl sm:text-5xl font-bold">{data.taskCount.completed}</h1>
        <h1 className="text-white text-xl sm:text-2xl font-semibold pt-2">
          Completed
        </h1>
      </div>
      <div className="bg-yellow-400 rounded-2xl p-6 sm:p-8 flex flex-col items-start">
        <h1 className="text-white text-4xl sm:text-5xl font-bold">{data.taskCount.active}</h1>
        <h1 className="text-white text-xl sm:text-2xl font-semibold pt-2">
          Accepted
        </h1>
      </div>
      <div className="bg-red-500 rounded-2xl p-6 sm:p-8 flex flex-col items-start">
        <h1 className="text-white text-4xl sm:text-5xl font-bold">{data.taskCount.failed}</h1>
        <h1 className="text-white text-xl sm:text-2xl font-semibold pt-2">
          Failed
        </h1>
      </div>
    </div>
  );
};
