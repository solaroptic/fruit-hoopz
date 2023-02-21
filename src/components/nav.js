import "./nav.module.css";
import React from "react";
import { Link } from "react-router-dom";
// import About from "./about";
// import App from "../App";
// import MySched from "./mySched";
// import Schedules from "./schedules";

const Nav = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/" style={{ textDecoration: "none" }}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/schedules" style={{ textDecoration: "none" }}>
              Availability
            </Link>
          </li>
          <li>
            <Link to="/mySched" style={{ textDecoration: "none" }}>
              My Avail
            </Link>
          </li>
          <li>
            <Link to="/about" style={{ textDecoration: "none" }}>
              About
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Nav;
