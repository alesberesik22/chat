import React, { useEffect, useState } from "react";
import "./Home.scss";
import { UserAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Home = () => {
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
    <div>
      Welcome, {user?.displayName}
      <button onClick={handleLogOut}>Log Out</button>
    </div>
  );
};

export default Home;
