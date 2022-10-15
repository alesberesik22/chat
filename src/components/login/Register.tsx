import React from "react";
import "./LoginStyles.scss";
import login from "../assets/login/images/login.svg";
import { UserAuth } from "../context/AuthContext";

const Register = (props: any) => {
  const { googleSignIn, user, signIn, signUp } = UserAuth();
  const handeSignUp = async () => {
    try {
      await signUp();
    } catch (error) {
      console.log(error);
    }
  };
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
        <button className="btn" type="button" onClick={handeSignUp}>
          Register
        </button>
      </div>
    </div>
  );
};

export default Register;
