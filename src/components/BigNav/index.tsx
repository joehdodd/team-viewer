import React from "react";
import { Link } from "react-router-dom";

import "./bigNav.css";

export default function BigNav(props: any) {
  return (
    <div className="big-nav-container">
      <Link to="/teams">
        <div className="big-nav-card">
          <h2>Teams</h2>
        </div>
      </Link>
      <Link to="/users">
        <div className="big-nav-card">
          <h2>Users</h2>
        </div>
      </Link>
    </div>
  );
}
