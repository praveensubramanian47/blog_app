import { jwtDecode } from "jwt-decode";
import React, { useEffect, useState } from "react";
import Spinner from "./Spinner";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import api from "@/api";

const ProtectedRoute = ({ children }) => {
  const [isAuthorized, setIsAuthorized] = useState(null);

  const location = useLocation();

  useEffect(() => {
    authorize().catch(() => setIsAuthorized(false));
  }, []);

  function refreshToken() {
    const refresh = localStorage.getItem("refresh");

    try {
      const response = api.post("refresh_token/", { refresh });

      if (response.data === 200) {
        localStorage.setItem("access", response.data.access);
        setIsAuthorized(true);
      } else {
        setIsAuthorized(false);
      }
    } catch (err) {
      setIsAuthorized(false);
      console.error("Error refresh token:", err);
    }
  }

  async function authorize() {
    const token = localStorage.getItem("access");

    if (!token) {
      setIsAuthorized(false);
      return;
    }

    const decodedToken = jwtDecode(token);
    const expiry_date = decodedToken.exp;
    const current_time = Date.now() / 1000;

    if (current_time > expiry_date) {
      //   await refreshToken();
    } else {
      setIsAuthorized(true);
    }
  }

  if (isAuthorized === null) {
    return <Spinner />;
  }

  return (
    <>
      {isAuthorized ? (
        children
      ) : (
        <Navigate to="/signin" state={{ from: location }} replace />
      )}
    </>
  );
};

export default ProtectedRoute;
