import { useEffect } from "react";
import LogIn from "./components/Auth/LogIn";
import { AdminDashboard } from "./components/Dashboard/AdminDashboard";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import { getLocalStorage, setLocalStorage } from "./utils/localStorage";

function App() {
  useEffect(() => {
    setLocalStorage();
    getLocalStorage()
  },);
  return (
    <>
      <LogIn />
      {/* <EmployeeDashboard /> */}
      {/* <AdminDashboard /> */}
    </>
  );
}

export default App;
