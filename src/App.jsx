import { useCallback, useContext, useEffect, useState } from "react";
import "./App.css";
import LogIn from "./components/Auth/LogIn";
import AdminDashBoard from "./components/DashBoard/AdminDashBoard";
import { EmployeeDashBoard } from "./components/DashBoard/EmployeeDashBoard";
import { getlocalstorage, setlocalstorage } from "./Utils/LocalStorage";
import { AuthContext } from "./context/AuthProvider";

function App() {
  const [User, setUser] = useState(null);
  const [LoggedInUserData, setLoggedInUserData] = useState(null);

  const Authdata = useContext(AuthContext);
  console.log(Authdata);

  useEffect(() => {
    setlocalstorage()
  }, []);

  useEffect(() => {
    const LogedInUser = localStorage.getItem("LoggedInUser");
    if (LogedInUser) {
      setUser(LogedInUser.role);
    }
  }, [Authdata]);

  function HandleLogIn(email, password) {
    if (email == "admin@gmail.com" && password == "123") {
      setUser("admin");
      localStorage.setItem("LoggedInUser", JSON.stringify({ role: "admin" }));
    } else if (Authdata) {
      const employees = Authdata.employeesData.find(
        (e) => email == e.email && password == e.password
      );
      if (employees) {
        setUser("employees");
        setLoggedInUserData(employees); 
        localStorage.setItem(
          "LoggedInUser",
          JSON.stringify({ role: "employees" })
        );
      }
    } else {
      alert("Invalid Credentails");
    }
  }

  return (
    <>
      <div className="bg-gradient-to-t from-[#393636] bg-[#1c1c1c] h-screen w-full duration-3s transition-all delay-3s">
        {!User ? <LogIn HandleLogIn={HandleLogIn} /> : ""}
        { User == 'employees' ? (
          <EmployeeDashBoard Data={LoggedInUserData} />
        ) : null}
        { User == 'admin' ? (
          <AdminDashBoard />
        ) : null}
      </div>
    </>
  );
}

export default App;
