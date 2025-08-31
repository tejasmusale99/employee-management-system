export const NewTask = ({Taskdata}) => {
 
  
  return (
    <div>
      <div className="h-full w-full max-w-sm min-h-[310px] bg-green-400 text-white p-4 rounded-xl flex-shrink-0">
        <div className="flex justify-between items-center">
          <h4 className="bg-red-600 font-bold px-4 py-1 rounded text-sm">
            {Taskdata.category}
          </h4>
          <h4 className="font-medium text-sm">{Taskdata.date}</h4>
        </div>
        <h1 className="text-2xl font-bold mt-5">{Taskdata.title}</h1>
        <p className="text-sm mt-2">
          {Taskdata.description} 
        </p>
        <div className="mt-4 flex gap-2">
          <button className="bg-amber-100 hover:bg-amber-700 hover:text-white text-sm text-black px-4 py-2 rounded">
            Accept Task
          </button>
        </div>
      </div>
    </div>
  );
};
