import React, { Fragment, useState } from "react";

const EditEmployee = ({ employ, setEmployChange }) => {
  //editText function

  const editText = async (id) => {
    try {
      const body = { name, gender, designation, city };

      const myHeaders = new Headers();

      myHeaders.append("Content-Type", "application/json");
      myHeaders.append("token", localStorage.token);

      await fetch(`http://localhost:5000/dashboard/employees/${id}`, {
        method: "PUT",
        headers: myHeaders,
        body: JSON.stringify(body),
      });

      setEmployChange(true);

      // window.location = "/";
    } catch (err) {
      console.error(err.message);
    }
  };

  const [name, setName] = useState(employ.employ_name);
  const [gender, setGender] = useState(employ.gender);
  const [designation, setDesignation] = useState(employ.designation);
  const [city, setCity] = useState(employ.city);
  return (
    <Fragment>
      <button
        type="button"
        className="btn btn-warning"
        data-toggle="modal"
        data-target={`#id${employ.user_id}`}
      >
        Edit
      </button>
      {/* id = "id21"*/}
      <div
        className="modal"
        id={`id${employ.user_id}`}
        onClick={() => {
          setName(employ.name);
          setGender(employ.gender);
          setDesignation(employ.designation);
          setCity(employ.city);
        }}
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Edit Employ</h4>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                onClick={() => {
                  setName(employ.name);
                  setGender(employ.gender);
                  setDesignation(employ.designation);
                  setCity(employ.city);
                }}
              >
                &times;
              </button>
            </div>

            <div className="modal-body">
              <input
                type="text"
                className="form-control"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="text"
                className="form-control"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
              />
              <input
                type="text"
                className="form-control"
                value={designation}
                onChange={(e) => setDesignation(e.target.value)}
              />
              <input
                type="text"
                className="form-control"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
            </div>

            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-warning"
                data-dismiss="modal"
                onClick={() => editText(employ.user_id)}
              >
                Edit
              </button>
              <button
                type="button"
                className="btn btn-danger"
                data-dismiss="modal"
                onClick={() => {
                  setName(employ.name);
                  setGender(employ.gender);
                  setDesignation(employ.designation);
                  setCity(employ.city);
                }}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default EditEmployee;
