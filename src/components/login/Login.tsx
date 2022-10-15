import React, { useEffect } from "react";
import "./LoginStyles.scss";
import login from "../assets/login/images/login.svg";
import { FcGoogle } from "react-icons/fc";
import "firebase/app";
import { UserAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = (props: any) => {
  const { googleSignIn, user } = UserAuth();
  const navigate = useNavigate();
  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    console.log(user?.displayName);
    if (user?.displayName != null) {
      console.log("som tu");
      navigate("/home");
    } else {
      console.log("neni som tu");
    }
  }, [user]);
  return (
    <div className="base_container" ref={props.containerRef}>
      <div className="header">Login</div>
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
            <label htmlFor="password">Password</label>
            <input type={"password"} name="password" placeholder="Password" />
          </div>
        </div>
      </div>
      <div className="footer">
        <button className="btn" type="button">
          Login
        </button>
        <button className="btn" type="button" onClick={handleGoogleSignIn}>
          <span>
            <FcGoogle />
          </span>
          Google Sign in
        </button>
      </div>
    </div>
  );
};

export default Login;
