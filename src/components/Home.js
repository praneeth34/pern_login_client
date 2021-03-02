import React from "react";

import { Link } from "react-router-dom";
import "./Home.css";
import Employee from "./Employee";

function Home() {
  return (
    <div className="container">
      <div className="py-4">
        <h1>Home Content</h1>
        <button className="btn">
          <Link className="btn btn-outline-success" to="/login">
            login
          </Link>
        </button>
        <button className="btn ">
          <Link className="btn btn-outline-primary" to="/register">
            Register
          </Link>
        </button>
      </div>
      <Link className="btn btn-outline-primary" to="/home/addEmploy">
        Add Employee
      </Link>
      <Employee />
    </div>
  );
}

export default Home;
