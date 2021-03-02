import React, { Fragment, useState, useEffect } from "react";
import EditEmployee from "./EditEmployee";
import "./EmployeeList.css";

const EmployeeList = ({ allEmploy, setEmployChange }) => {
  //   console.log(allEmploy);
  const [employees, setEmployees] = useState([]);

  async function deleteEmploy(id) {
    try {
      await fetch(`http://localhost:5000/dashboard/employees/${id}`, {
        method: "DELETE",
        headers: { token: localStorage.token },
      });

      setEmployees(employees.filter((employ) => employ.user_id !== id));
    } catch (err) {
      console.error(err.message);
    }
  }

  useEffect(() => {
    setEmployees(allEmploy);
  }, [allEmploy]);

  // console.log(employees);

  return (
    <Fragment>
      {" "}
      <table className="table mt-5">
        <thead>
          <tr>
            <th>Name</th>
            <th>Gender</th>
            <th>Designation</th>
            <th>City</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {/*<tr>
            <td>John</td>
            <td>Doe</td>
            <td>john@example.com</td>
          </tr> */}

          {employees.length !== 0 &&
            employees[0].user_id !== null &&
            employees.map((employ) => (
              <tr key={employ.user_id}>
                <td>{employ.employ_name}</td>
                <td>{employ.gender}</td>
                <td>{employ.designation}</td>
                <td>{employ.city}</td>
                <td>
                  <EditEmployee
                    employ={employ}
                    setEmployChange={setEmployChange}
                  />
                </td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => deleteEmploy(employ.user_id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </Fragment>
  );
};

export default EmployeeList;
