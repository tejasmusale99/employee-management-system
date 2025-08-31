import { AcceptTask } from "./AcceptTask";
import { CompletedTask } from "./CompletedTask";
import { FailedTask } from "./FailedTask";
import { NewTask } from "./NewTask";

export const TaskList = ({ data }) => {
  // console.log(data.tasks)
  return (
    <div className="overflow-x-auto p-4 no-scrollbar">
      <div className="flex h-auto gap-5 items-start flex-wrap sm:flex-nowrap">
        {data.tasks.map((ele, idx) => {
          // console.log(ele.newTask);
          if (ele.newTask) {
            return <NewTask key={idx} Taskdata={ele} />;
          }
          if (ele.active) {
            return <AcceptTask key={idx}/>;
          }
         if (ele.completed) {
            return <CompletedTask key={idx}/>;
          }
           if (ele.failed) {
            return <FailedTask key={idx}/>;
          }
        })}
      </div>
    </div>
  );
};
