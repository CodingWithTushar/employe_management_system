import React, { createContext, useState, useEffect } from "react";
import { getlocalstorage } from "../Utils/LocalStorage";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const { employeesData, adminData } = getlocalstorage();
    setUserData({ employeesData, adminData });
  }, []); // Empty dependency array ensures this runs only once on mount.

  return (
    <AuthContext.Provider value={userData}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
