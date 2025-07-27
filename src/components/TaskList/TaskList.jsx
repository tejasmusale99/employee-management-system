import { AcceptTask } from "./AcceptTask";
// import { CompletedTask } from "./CompletedTask";
// import { FailedTask } from "./FailedTask";
// import { NewTask } from "./NewTask";

export const TaskList = ({data}) => {
  // console.log(data.tasks)
  return (
    <div className="overflow-x-auto p-4 no-scrollbar">
      <div className="flex h-auto gap-5 items-start flex-wrap sm:flex-nowrap">
        {
          data.tasks.map((ele)=>{
            console.log(ele.active);
            if(ele.active){
              return <AcceptTask />
            }
          })
        }
        {/* <AcceptTask AcceptTaskData={data}/>
        <NewTask NewTaskData={data}/>
        <CompletedTask CompletedTaskData={data}/>
        <FailedTask FailedTaskData={data}/> */}
      </div>
    </div>
  );
};
