//sets up the reusable Navbar component
import React from "react";
import "./Navbar.css";

const Navbar = props => (
      <nav className="navbar navbar-default navbar-fixed-top">
         <ul>
          <li className="LeftText">Test Your Memory and Your Might!</li>
          <li className="CenterText"></li>
          <li className="RightText">Score: {props.Score} | Top Score: {props.TopScore}</li>
        </ul>
      </nav>
);

export default Navbar;