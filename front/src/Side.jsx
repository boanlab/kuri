import React, { useState } from "react";
import "./Side.scss";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`sidebar ${isOpen ? "open" : ""}`}>
      <div className="sidebar-header">
        <button type="button" className="btn btn-toggle" onClick={toggleOpen}>
          <span className={`icon ${isOpen ? "icon-close" : "icon-menu"}`} />
        </button>
      </div>
      <ul className="sidebar-content">
        <li className="sidebar-item">
          <a href="#" className="sidebar-link">
            Home
          </a>
        </li>
        <li className="sidebar-item">
          <a href="#" className="sidebar-link">
            About
          </a>
        </li>
        <li className="sidebar-item">
          <a href="#" className="sidebar-link">
            Services
          </a>
        </li>
        <li className="sidebar-item">
          <a href="#" className="sidebar-link">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
