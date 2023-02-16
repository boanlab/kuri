import React from "react";
import {
  FaAngleRight,
  FaAngleLeft,
  FaChartBar,
  FaThLarge,
  FaShoppingCart,
  FaCog,
  FaSignOutAlt,
  FaBars,
} from "react-icons/fa";
<<<<<<< HEAD
import { FiUpload } from "react-icons/fi";
import { TbChartCircles } from "react-icons/tb";
import { MdOutlinePolicy } from "react-icons/md";
=======
>>>>>>> parent of e7ed5a8 (UI with Sidebar)
import { NavLink } from "react-router-dom";
import "../scss/navbar.scss";

const ICON_SIZE = 30;

function Navbar({ visible, show }) {
  return (
    <>
      <div className="mobile-nav">
        <button className="mobile-nav-btn" onClick={() => show(!visible)}>
          <FaBars size={24} />
        </button>
      </div>
      <nav className={!visible ? "navbar" : ""}>
        <button
          type="button"
          className="nav-btn"
          onClick={() => show(!visible)}
        >
          {!visible ? <FaAngleRight size={30} /> : <FaAngleLeft size={30} />}
        </button>
        <div>
<<<<<<< HEAD
          <NavLink className="logo" to="/main">
            <img
              src="https://user-images.githubusercontent.com/113777043/219305022-a306d523-edfc-430e-b465-00094aca2c39.png"
              alt="Logo"
            />
            KURI
          </NavLink>
          <h2>Kubenetes Network Policy Simulator</h2>
=======
          <NavLink className="logo" to="/"></NavLink>
>>>>>>> parent of e7ed5a8 (UI with Sidebar)
          <div className="links nav-top">
            <NavLink to="/main" className="nav-link">
              <FaThLarge size={ICON_SIZE} />
              <span>Main</span>
            </NavLink>
            <NavLink to="/pods" className="nav-link">
              <FaChartBar size={ICON_SIZE} />
              <span>Pods </span>
            </NavLink>
<<<<<<< HEAD

            <NavLink to="/policies" className="nav-link">
              <MdOutlinePolicy size={ICON_SIZE} />
              <span>Policies </span>
            </NavLink>

            <NavLink to="/upload" className="nav-link">
              <FiUpload size={ICON_SIZE} />
              <span>Upload</span>
=======
            <NavLink to="/policies" className="nav-link">
              <FaShoppingCart size={ICON_SIZE} />
              <span>Policies</span>
>>>>>>> parent of e7ed5a8 (UI with Sidebar)
            </NavLink>
          </div>
        </div>

        <div className="links">
          <NavLink to="/settings" className="nav-link">
            <FaCog size={ICON_SIZE} />
            <span>Settings</span>
          </NavLink>
          <NavLink to="/Sign-out" className="nav-link">
            <FaSignOutAlt size={ICON_SIZE} />
            <span>Logout</span>
          </NavLink>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
