import React from "react";
import "./LoginStyles.scss";
import login from "../assets/login/images/login.svg";

const Register = (props: any) => {
  return (
    <div className="base_container" ref={props.containerRef}>
      <div className="header">Register</div>
      <div className="content">
        <div className="image">
          <img src={login} alt="login" />
        </div>
        <div className="form">
          <div className="form_group">
            <label htmlFor="username">Username</label>
            <input type={"text"} name="username" placeholder="Username" />
          </div>
          <div className="form_group">
            <label htmlFor="email">Email</label>
            <input type={"email"} name="email" placeholder="Email" />
          </div>
          <div className="form_group">
            <label htmlFor="password">Password</label>
            <input type={"password"} name="password" placeholder="Password" />
          </div>
        </div>
      </div>
      <div className="footer">
        <button className="btn" type="button">
          Register
        </button>
      </div>
    </div>
  );
};

export default Register;
