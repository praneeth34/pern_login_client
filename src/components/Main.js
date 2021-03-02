import React from "react";
import { Link } from "react-router-dom";

import "./Main.css";

function Main() {
  return (
    <div className="main_page">
      <div className="jumbotron">
        <div className="jumbotron__left">
          <div className="content">
            <h1>Welcome User</h1>
            <p>Sign In and start editing Employees</p>
          </div>
          <div className="buttons">
            <Link to="/login" className="btn btn-primary">
              Login
            </Link>
            <Link to="/register" className="btn btn-success">
              Register
            </Link>
          </div>
        </div>
        <div className="jumbotron__right">
          {" "}
          <img
            src="https://i.pinimg.com/originals/16/69/19/166919f336b6cd7f3dd1132761fdad52.gif"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Main;
