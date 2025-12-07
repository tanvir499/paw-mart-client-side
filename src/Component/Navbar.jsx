import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router";
import Logo from "../assets/paw-mart-logo.png";
import { AuthContext } from "../Provider/AuthProvider";
import { signOut } from "firebase/auth";
import auth from "../firebase/firebase.config";

const Navbar = () => {
  const { user } = useContext(AuthContext);
  const [isChecked, setIsChecked] = useState(false);

  const handleThemeChange = () => {
    setIsChecked((prev) => !prev);
  };

  useEffect(() => {
    const theme = isChecked ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", theme);
  }, [isChecked]);

  const handleSignOut = () => {
    signOut(auth);
  };

  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        {/* MOBILE DROPDOWN */}
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </label>

          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[9999] mt-3 w-52 p-2 shadow"
          >
            <li className="font-semibold text-xl">
              <Link to="/">Home</Link>
            </li>
            <li className="font-semibold text-xl">
              <Link to="/services">Services</Link>
            </li>

            {user && (
              <>
                <li className="font-semibold text-xl">
                  <Link to="/Profile">My Profile</Link>
                </li>
                <li className="font-semibold text-xl">
                  <Link to="/AddServices">Add Services</Link>
                </li>
                <li className="font-semibold text-xl">
                  <Link to="/MyServices">My Services</Link>
                </li>
              </>
            )}
          </ul>
        </div>

        {/* LOGO + TITLE */}
        <div className="flex items-center gap-2">
          <img className="w-16 hidden lg:block" src={Logo} alt="logo" />

          {/* UPDATED TEXT COLOR */}
          <h3 className="font-bold text-3xl bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-600 bg-clip-text text-transparent">
            Paw Mart
          </h3>
        </div>
      </div>

      {/* DESKTOP MENU */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 flex items-center">
          <li className="font-semibold text-xl">
            <Link to="/">Home</Link>
          </li>
          <li className="font-semibold text-xl">
            <Link to="/services">Services</Link>
          </li>

          {user && (
            <>
              <li className="font-semibold text-xl">
                <Link to="/Profile">My Profile</Link>
              </li>
              <li className="font-semibold text-xl">
                <Link to="/add-services">Add Services</Link>
              </li>
              <li className="font-semibold text-xl">
                <Link to="/my-services">My Services</Link>
              </li>
              <li className="font-semibold text-xl">
                <Link to="/my-orders">My Orders</Link>
              </li>
            </>
          )}
        </ul>
      </div>

      {/* THEME TOGGLE BUTTON (RESTORED) */}
      <div className="navbar-center">
        <label className="swap swap-rotate cursor-pointer">
          <input onClick={handleThemeChange} type="checkbox" />

          {/* Sun icon */}
          <svg
            className="swap-off h-8 w-8 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M5 12a1 1 0 0 0-1-1H3a1 1 0 0 0 0 2h1a1 1 0 0 0 1-1Zm7-7a1 1 0 0 0 1-1V3a1 1 0 0 0-2 0v1a1 1 0 0 0 1 1Zm6.36 2.05a1 1 0 0 0 0-1.41l-.71-.71a1 1 0 1 0-1.41 1.41l.71.71a1 1 0 0 0 1.41 0ZM12 6.5A5.5 5.5 0 1 0 17.5 12 5.51 5.51 0 0 0 12 6.5Z" />
          </svg>

          {/* Moon icon */}
          <svg
            className="swap-on h-8 w-8 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M21.64 13a1 1 0 0 0-1.05-.14A8.05 8.05 0 0 1 17.22 13 8.15 8.15 0 0 1 9.08 5.49a8.59 8.59 0 0 1 .25-2A1 1 0 0 0 8 2.36 10.14 10.14 0 1 0 22 14.05a1 1 0 0 0-.36-1.05Z" />
          </svg>
        </label>
      </div>

      {/* AUTH BUTTONS */}
      {user ? (
        <div className="navbar-end">
          <button
            onClick={handleSignOut}
            className="px-6 py-2 font-semibold text-white rounded-lg bg-gradient-to-r from-sky-500 via-blue-500 to-indigo-500 hover:opacity-90 transition-all shadow-md"
          >
            Logout
          </button>
        </div>
      ) : (
        <div className="navbar-end">
          <Link
            to="/Login"
            className="px-6 py-2 font-semibold text-white rounded-lg bg-gradient-to-r from-sky-500 via-blue-500 to-indigo-500 hover:opacity-90 transition-all shadow-md"
          >
            Login
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
