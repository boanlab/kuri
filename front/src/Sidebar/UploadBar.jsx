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
          <NavLink className="logo" to="/"></NavLink>
          <div className="links nav-top">
            <NavLink to="/main" className="nav-link">
              <FaThLarge size={ICON_SIZE} />
              <span>Main</span>
            </NavLink>
            <NavLink to="/pods" className="nav-link">
              <FaChartBar size={ICON_SIZE} />
              <span>Pods </span>
            </NavLink>
            <NavLink to="/policies" className="nav-link">
              <FaShoppingCart size={ICON_SIZE} />
              <span>Policies</span>
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
