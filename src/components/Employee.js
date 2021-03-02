import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Employee() {
  const [users, setUser] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:5000/employees");
    setUser(result.data);
    // console.log(result);
  };
  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:5000/employees/${id}`);
    loadUsers();
  };
  return (
    <div className="container">
      <div className="py-4">
        <table className="table border shadow">
          <thead className="thead-dark">
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Gender</th>
              <th scope="col">Designation</th>
              <th scope="col">City</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr>
                <th scope="row">{user.name}</th>
                <td>{user.gender}</td>
                <td>{user.designation}</td>
                <td>{user.city}</td>
                <td>
                  <Link
                    className="btn btn-outline-primary mr-2"
                    to={`/home/edit/${user.id}`}
                  >
                    Edit
                  </Link>
                  <Link
                    className="btn btn-danger"
                    onClick={() => deleteUser(user.id)}
                  >
                    Delete
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Employee;
