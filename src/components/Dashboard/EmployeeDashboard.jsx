import Header from "../smallComponents/Header"
import { TaskStatusPanel } from "../smallComponents/TaskStatusPanel"
import { TaskList } from "../TaskList/TaskList"

const EmployeeDashboard = () => {
    return(
         <div className="dashboard min-h-screen p-10 bg-[#1c1c1c]">
            <Header />
            <TaskStatusPanel />
            <TaskList />
        </div>
    )
}

export default EmployeeDashboard