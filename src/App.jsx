import { useContext, useEffect, useState } from "react";
import LogIn from "./components/Auth/LogIn";
import { AdminDashboard } from "./components/Dashboard/AdminDashboard";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import { getLocalStorage, setLocalStorage } from "./utils/localStorage";
import { AuthContext } from "./context/AuthProvider";

function App() {
  const [user, setUser] = useState(null);
  const [logInUserData, setLogInUserData] = useState(null)
  const authData = useContext(AuthContext);

  useEffect(()=>{
    const loggedInUser = localStorage.getItem('loggedInUser')
    if(loggedInUser){ 
      const userData = JSON.parse(loggedInUser)
      setUser(userData.role)
      setLogInUserData(userData.data)
    }
  }, []);

  function handleLogIn(email, password) {
    if (email === "admin@gmail.com" && password === "123") {
      localStorage.setItem('loggedInUser',JSON.stringify({role:'admin'}))
      setLogInUserData("admin")
      setUser("admin");
    } else if (authData) {
      const employee = authData.employees.find((e) => e.email === email && e.pass === password)
      if(employee){
         localStorage.setItem('loggedInUser',JSON.stringify({role:'employee',data:employee}))
         setLogInUserData(employee)
         setUser("employee");
      }
    } else {
      alert("invalid credentials");
    }
  }

  // Run only once to set default data in localStorage
  // useEffect(() => {
  //   setLocalStorage();
  //   getLocalStorage(); 
  // }, []);

  // // Wait till authData is loaded
  // if (!authData) {
  //   return <div>Loading...</div>;
  // }


  useEffect(() => {
  // Check if employees/admin already exist in localStorage
  const existingData = localStorage.getItem("employees");
  const existingAdmin = localStorage.getItem("admin");

  if (!existingData || !existingAdmin) {
    setLocalStorage(); // only set default data if not present
  }
  
  getLocalStorage(); 
}, []);


  return (
    <>
      {!user ? <LogIn handlelogin={handleLogIn} />: ''}
      {user === "admin" && <AdminDashboard changeuser={setUser}/>}
      {user === "employee" && <EmployeeDashboard changeuser={setUser} data={logInUserData}/>}
    </>
  );
}

export default App;
