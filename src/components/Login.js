import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";
const Login = ({ setAuth }) => {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  const { email, password } = inputs;

  const onChange = (e) =>
    setInputs({ ...inputs, [e.target.name]: e.target.value });

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const body = { email, password };
      const response = await fetch("http://localhost:5000/auth/login", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(body),
      });

      const parseRes = await response.json();
      if (parseRes.token) {
        localStorage.setItem("token", parseRes.token);
        setAuth(true);
      } else {
        setAuth(false);
        alert(parseRes);
      }
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <div className="login">
      <div className="login__left">
        <Fragment>
          <h1 className="mt-5 text-center">Login</h1>
          <form onSubmit={onSubmitForm}>
            <label htmlFor="email">
              <b>Email</b>
            </label>
            <input
              type="text"
              name="email"
              value={email}
              onChange={(e) => onChange(e)}
              placeholder="Enter registered Email"
              className="form-control my-3"
              required
            />
            <label htmlFor="password">
              <b>Password</b>
            </label>
            <input
              type="password"
              name="password"
              value={password}
              placeholder="Enter Password"
              onChange={(e) => onChange(e)}
              className="form-control my-3"
              required
            />
            <button className="btn btn-success btn-block">Submit</button>
          </form>
          <div className="funciton">
            <span>
              Not a user?{" "}
              <Link className="btn btn-outline-primary" to="/register">
                register
              </Link>
            </span>
          </div>
        </Fragment>
      </div>
      <div className="login__right">
        <img
          src="https://1.bp.blogspot.com/-0pliOswf4SM/X2pP6r_Z9aI/AAAAAAAAPsg/mjnLVCSi4ysK9r6SPMYG12p3GQCiSE52wCLcBGAsYHQ/s0/unnamed%2B%25282%2529.gif"
          alt=""
        />
      </div>
    </div>
  );
};

export default Login;
