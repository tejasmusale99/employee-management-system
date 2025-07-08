import Header from "../smallComponents/Header"
import { TaskStatusPanel } from "../smallComponents/TaskStatusPanel"

const EmployeeDashboard = () => {
    return(
        <div className="dashboard p-10 bg-[#1c1c1c] h-screen">
            <Header />
            <TaskStatusPanel />
        </div>
    )
}

export default EmployeeDashboard