import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const Protected = ({ children }: any) => {
  const navigate = useNavigate();
  const { user } = UserAuth();
  if (user === null) {
    return <Navigate to="/" />;
  } else {
    return children;
  }
};

export default Protected;
