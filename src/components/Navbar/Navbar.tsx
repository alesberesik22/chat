import React, { useState } from "react";
import "./Navbar.scss";
import logo from "../assets/chat/images/logo2.png";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const Navbar = () => {
  const [redirect, setRedirect] = useState(false);
  const navigate = useNavigate();
  const { logOut, user } = UserAuth();
  const handleLogOut = async () => {
    try {
      await logOut();
      setRedirect(true);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="navbar">
      <div className="logo">
        <img src={logo} alt="logo" onClick={() => navigate("/chat")} />
      </div>
      <div className="hello">
        <h4>
          Hello {user.displayName} <span className="hand">🤚</span>
        </h4>
      </div>
      <div className="navbar_logout">
        <button onClick={handleLogOut}>Log Out</button>
      </div>
    </div>
  );
};

export default Navbar;
