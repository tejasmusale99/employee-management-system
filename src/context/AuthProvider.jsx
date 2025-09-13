import { createContext, useEffect, useState } from "react";
import { getLocalStorage } from "../utils/localStorage";

export const AuthContext = createContext();
// localStorage.clear()
const AuthProvider = ({ children }) => {

const [userData, setUserData ] = useState(null)

  // useEffect(() => {
  //   const { employees,admin } = getLocalStorage();
  //   setUserData({employees,admin})
  // }, []);

    const refreshData = () => {
    const { employees, admin } = getLocalStorage();
    setUserData({ employees, admin });
  };

  useEffect(() => {
    refreshData();
  }, []);


  return (
    <div>
      <AuthContext.Provider value={{ ...userData, refreshData }}>
        {children}
      </AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
