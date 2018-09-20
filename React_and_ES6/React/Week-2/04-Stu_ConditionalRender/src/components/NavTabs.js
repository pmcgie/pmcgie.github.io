import React from "react";

const NavTabs = props => (
  <ul className="nav nav-tabs">
    <li className="nav-item">
      <a onClick={() => props.handlePageChange("Home")} className="nav-link">
        Home
      </a>
    </li>
    <li className="nav-item">
      <a onClick={() => props.handlePageChange("About")} className="nav-link">
        About
      </a>
    </li>
    <li className="nav-item">
      <a onClick={() => props.handlePageChange("Blog")} className="nav-link">
        Blog
      </a>
    </li>
    <li className="nav-item">
      <a onClick={() => props.handlePageChange("Contact")} className="nav-link">
        Contact
      </a>
    </li>
  </ul>
);

export default NavTabs;
