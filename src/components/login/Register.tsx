import React, { useEffect, useState } from "react";
import "./LoginStyles.scss";
import login from "../assets/login/images/login.svg";
import { UserAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Register = (props: any) => {
  const { user, signUp } = UserAuth();
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
  });
  const handeSignUp = async () => {
    try {
      await signUp(credentials.email, credentials.password, credentials.name);
      navigate("/chat");
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (user?.displayName != null) {
      console.log("som tu");
      navigate("/chat");
    }
  }, [user]);
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
            <input
              type={"text"}
              name="username"
              placeholder="Username"
              onChange={(e) =>
                setCredentials({ ...credentials, name: e.target.value })
              }
            />
          </div>
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
        <button className="btn" type="button" onClick={handeSignUp}>
          Register
        </button>
      </div>
    </div>
  );
};

export default Register;
