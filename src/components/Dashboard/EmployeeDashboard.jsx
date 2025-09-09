import Header from "../smallComponents/Header"
import { TaskStatusPanel } from "../smallComponents/TaskStatusPanel"
import { TaskList } from "../TaskList/TaskList"

const EmployeeDashboard = (props) => {
    // console.log(data)
    return(
         <div className="dashboard min-h-screen p-10 bg-[#1c1c1c]">
            <Header changeuser={props.changeuser} data={props.data}/>
            <TaskStatusPanel data={props.data}/>
            <TaskList data={props.data}/>
        </div>
    )
}

export default EmployeeDashboard