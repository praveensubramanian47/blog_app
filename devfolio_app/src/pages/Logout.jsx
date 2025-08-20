import React from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  localStorage.removeItem("access");
  localStorage.removeItem("refresh");
  const navigate = useNavigate();
  navigate("/signin", { replace: true });
  return <div></div>;
};

export default Logout;
