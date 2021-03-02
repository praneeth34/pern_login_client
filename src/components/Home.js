import React from "react";

import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div className="container">
      <div className="d-flex justify-content-around">
        <h3>Home Content</h3>
        <Link className="btn btn-outline-primary" to="/home/addEmploy">
          Add Employee
        </Link>
      </div>
    </div>
  );
}

export default Home;
