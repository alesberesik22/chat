import React, { useEffect, useState } from "react";
import "./LoginStyles.scss";
import login from "../assets/login/images/login.svg";
import { FcGoogle } from "react-icons/fc";
import "firebase/app";
import { UserAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = (props: any) => {
  const { googleSignIn, user, signIn } = UserAuth();
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };
  const handleSignIn = async () => {
    console.log("sign");
    console.log(credentials);
    try {
      await signIn(credentials.email, credentials.password);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    console.log(user?.displayName);
    if (user?.displayName != null) {
      console.log("som tu");
      navigate("/chat");
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
            <label htmlFor="email">Email</label>
            <input
              type={"email"}
              name="email"
              placeholder="Email"
              onChange={(e) =>
                setCredentials({ ...credentials, email: e.target.value })
              }
            />
          </div>
          <div className="form_group">
            <label htmlFor="password">Password</label>
            <input
              type={"password"}
              name="password"
              placeholder="Password"
              onChange={(e) =>
                setCredentials({ ...credentials, password: e.target.value })
              }
            />
          </div>
        </div>
      </div>
      <div className="footer">
        <button className="btn" type="button" onClick={handleSignIn}>
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
