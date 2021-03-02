import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import "./Register.css";

const Register = ({ setAuth }) => {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
    name: "",
  });

  const { email, password, name } = inputs;

  const onChange = (e) =>
    setInputs({ ...inputs, [e.target.name]: e.target.value });

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const body = { email, password, name };
      const response = await fetch("http://localhost:5000/auth/register", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(body),
      });
      const parseRes = await response.json();
      //   console.log(parseRes);
      if (parseRes.token) {
        localStorage.setItem("token", parseRes.token);
        setAuth(true);
        alert("Registered Successfully");
      } else {
        setAuth(false);
        alert(parseRes);
      }
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <div className="register">
      <div className="register__left">
        <Fragment>
          <h1 className="mt-5 text-center">Register</h1>
          <form onSubmit={onSubmitForm}>
            <input
              type="text"
              name="email"
              value={email}
              placeholder="email"
              onChange={(e) => onChange(e)}
              required
              className="form-control my-3"
            />
            <input
              type="password"
              name="password"
              value={password}
              placeholder="password"
              onChange={(e) => onChange(e)}
              required
              className="form-control my-3"
            />
            <input
              type="text"
              name="name"
              value={name}
              placeholder="name"
              onChange={(e) => onChange(e)}
              required
              className="form-control my-3"
            />
            <button className="btn btn-success btn-block">Submit</button>
          </form>
          <div className="funciton">
            <span>
              Already a user?{" "}
              <Link className="btn btn-outline-primary" to="/login">
                Login
              </Link>
            </span>
          </div>
        </Fragment>
      </div>
      <div className="register__right">
        <img
          src="https://freefrontend.com/assets/img/css-animation-examples/css-animation-indoors-or-outdoors.gif"
          alt=""
        />
      </div>
    </div>
  );
};

export default Register;
