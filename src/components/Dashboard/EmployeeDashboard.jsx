import Header from "../smallComponents/Header"
import { TaskStatusPanel } from "../smallComponents/TaskStatusPanel"
import { TaskList } from "../TaskList/TaskList"

const EmployeeDashboard = ({data}) => {
    // console.log(data)
    return(
         <div className="dashboard min-h-screen p-10 bg-[#1c1c1c]">
            <Header data={data}/>
            <TaskStatusPanel data={data}/>
            <TaskList data={data}/>
        </div>
    )
}

export default EmployeeDashboard