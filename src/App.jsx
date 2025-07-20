import { useEffect, useState } from "react";
import LogIn from "./components/Auth/LogIn";
import { AdminDashboard } from "./components/Dashboard/AdminDashboard";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import { getLocalStorage, setLocalStorage } from "./utils/localStorage";

function App() {
  const [user, setUser] = useState(null);

  function handleLogIn(email, password) {
    if (email == "admin@gmail.com" && password == "123") {
      console.log("this is admin");
      setUser('admin')
    } else if (email == "user@gmail.com" && password == "123") {
      console.log("this is admin");
      setUser('employee')
    } else {
      alert("invalid credentials");
    }
  }

  useEffect(() => {
    setLocalStorage();
    getLocalStorage();
  });

  return (
    <>
      {!user  && <LogIn handlelogin={handleLogIn} />}
       {user === "admin" && <AdminDashboard />}
        {user === "employee" && <EmployeeDashboard />}
    </>
  );
}

export default App;
