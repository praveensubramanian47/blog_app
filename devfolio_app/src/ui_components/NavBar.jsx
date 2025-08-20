import React, { useState } from "react";
import { Switch } from "@/components/ui/switch";
import { FaHamburger } from "react-icons/fa";
import ResponsiveNavBar from "./ResponsiveNavBar";
import { Link, NavLink, useNavigate } from "react-router-dom";

const NavBar = ({ darkMode, handleDarkMode }) => {
  const [showNavBar, setShowNavBar] = useState(false);
  const navigate = useNavigate();

  function logout() {
    localStorage.removeItem("access");
    localStorage.removeItem("refresh");
    navigate("/signin");
  }

  return (
    <>
      <nav className="max-container padding-x py-6 flex justify-between items-center gap-6 sticky top-0 z-10 bg-[#FFFFFF] dark:bg-[#141624]">
        <Link to="/" className="text-[#141624] text-2xl dark:text-[#FFFFFF]">
          DevFolio
        </Link>
        <ul className="flex items-center justify-end gap-9 text-[#3B3C4A] lg:flex-1 max-md:hidden dark:text-[#FFFFFF]">
          <li>
            <NavLink className="lk" to="profile">
              Hi, Praveen
            </NavLink>
          </li>

          <li className="cursor-pointer" onClick={logout}>
            Logout
          </li>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "")}
            to="signin"
          >
            Login
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "")}
            to="signup"
          >
            Register
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "active font-semibold" : "font-semibold"
            }
            to="create_post"
          >
            Create post
          </NavLink>
        </ul>

        <Switch
          className="cursor-pointer"
          onCheckedChange={handleDarkMode}
          checked={darkMode}
        />

        <FaHamburger
          className="text-2xl cursor-pointer hidden max-md:block dark:text-white"
          onClick={() => setShowNavBar((curr) => !curr)}
        />
      </nav>

      {showNavBar && <ResponsiveNavBar />}
    </>
  );
};

export default NavBar;
