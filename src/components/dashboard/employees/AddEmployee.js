import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import "./AddEmployee.css";
const AddEmployee = ({ setEmployChange }) => {
  const [employ_name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [designation, setDesignation] = useState("");
  const [city, setCity] = useState("");

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const myHeaders = new Headers();

      myHeaders.append("Content-Type", "application/json");
      myHeaders.append("token", localStorage.token);

      const body = { employ_name, gender, designation, city };
      const response = await fetch(
        "http://localhost:5000/dashboard/employees",
        {
          method: "POST",
          headers: myHeaders,
          body: JSON.stringify(body),
        }
      );

      const parseResponse = await response.json();
      alert("success");
      setName("");
      setGender("");
      setDesignation("");
      setCity("");
      console.log(parseResponse);

      setEmployChange(true);
      //   window.location = "/";
    } catch (err) {
      console.error(err.message);
    }
  };
  return (
    <div className="addEmployee">
      <Fragment>
        <h1 className="text-center my-5">Input Employee Details</h1>
        <form onSubmit={onSubmitForm}>
          <input
            type="text"
            className="form-control"
            placeholder="Name"
            value={employ_name}
            required
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            className="form-control my-4"
            placeholder="Gender"
            value={gender}
            required
            onChange={(e) => setGender(e.target.value)}
          />
          <input
            type="text"
            className="form-control my-4"
            placeholder="Designation"
            value={designation}
            required
            onChange={(e) => setDesignation(e.target.value)}
          />
          <input
            type="text"
            className="form-control my-4"
            placeholder="City"
            value={city}
            required
            onChange={(e) => setCity(e.target.value)}
          />
          <div className="d-flex justify-content-around">
            <button className="btn btn-success">Add</button>
            <Link className="btn btn-secondary" to="/dashboard">
              Back to Home
            </Link>
          </div>
        </form>
      </Fragment>
    </div>
  );
};

export default AddEmployee;
