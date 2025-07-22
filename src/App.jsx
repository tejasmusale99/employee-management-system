import { useContext, useEffect, useState } from "react";
import LogIn from "./components/Auth/LogIn";
import { AdminDashboard } from "./components/Dashboard/AdminDashboard";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import { getLocalStorage, setLocalStorage } from "./utils/localStorage";
import { AuthContext } from "./context/AuthProvider";

function App() {
  const [user, setUser] = useState(null);
  const authData = useContext(AuthContext);

  useEffect(()=>{
    if(authData){ 
      const loggedInUser = localStorage.getItem('loggedInUser')
      if(loggedInUser){
        setUser(loggedInUser.role)
      }
    }
  }, [authData]);

  function handleLogIn(email, password) {
    if (email === "admin@gmail.com" && password === "123") {
      localStorage.setItem('loggedInUser',JSON.stringify({role:'admin'}))
      setUser("admin");
    } else if (
      authData?.employees?.find(
        (e) => e.email === email && e.pass === password
      )
    ) {
      localStorage.setItem('loggedInUser',JSON.stringify({role:'employee'}))
      setUser("employee");
    } else {
      alert("invalid credentials");
    }
  }

  // Run only once to set default data in localStorage
  useEffect(() => {
    setLocalStorage();
    getLocalStorage(); // (not really needed here)
  }, []);

  // Wait till authData is loaded
  if (!authData) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {!user && <LogIn handlelogin={handleLogIn} />}
      {user === "admin" && <AdminDashboard />}
      {user === "employee" && <EmployeeDashboard />}
    </>
  );
}

export default App;
