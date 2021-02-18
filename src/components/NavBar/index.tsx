import React from "react";
import { Link, NavLink } from "react-router-dom";

import "./navBar.css";

export default function NavBar(props: any) {
  return (
    <div className="nav-bar-container">
      <Link to="/">
        <div className="nav-bar-title-container">
          <h1>Epic Team Viewer</h1>
        </div>
      </Link>
      <NavLink
        className="nav-link"
        activeClassName="nav-link-selected"
        to="/teams"
      >
        Teams
      </NavLink>
      <NavLink
        className="nav-link"
        activeClassName="nav-link-selected"
        to="/users"
      >
        Users
      </NavLink>
    </div>
  );
}
