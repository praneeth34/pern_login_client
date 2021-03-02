import React, { useEffect, useState } from "react";
import Home from "../Home";
import EmployeeList from "./employees/EmployeeList";

const Dashboard = ({ setAuth }) => {
  const [allEmploy, setAllEmploy] = useState([]);
  const [employChange, setEmployChange] = useState(false);

  const getProfile = async () => {
    try {
      const res = await fetch("http://localhost:5000/dashboard/", {
        method: "GET",
        headers: { token: localStorage.token },
      });

      const parseData = await res.json();
      setAllEmploy(parseData);
    } catch (err) {
      console.error(err.message);
    }
  };

  const logout = async (e) => {
    e.preventDefault();
    try {
      localStorage.removeItem("token");
      setAuth(false);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getProfile();
    setEmployChange(false);
  }, [employChange]);

  return (
    <div className="dashboard">
      <div className="d-flex">
        <h2>Welcome</h2>
        <button onClick={(e) => logout(e)} className="btn btn-primary">
          Logout
        </button>
      </div>
      <Home setEmployChange={setEmployChange} />
      <EmployeeList allEmploy={allEmploy} setEmployChange={setEmployChange} />
    </div>
  );
};

export default Dashboard;
