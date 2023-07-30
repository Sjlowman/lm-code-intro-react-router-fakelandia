import { NavLink } from "react-router-dom";
import React, { useEffect, useState } from "react";

const Nav: React.FC = () => (
  <nav
    className="is-flex is-flex-grow-1 is-align-items-center"
    style={{ width: "100%" }}
  >
    <ul
      style={{ width: "100%" }}
      className="is-flex is-flex-direction-row is-justify-content-space-evenly is-justify-content-space-evenly"
    >
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/misdemeanour">Misdemeanours</NavLink>
      </li>
      <li>
        <NavLink to="/confession">Confessions</NavLink>
      </li>
      <li>
        <NavLink to="/about">About</NavLink>
      </li>
      <li>
        <NavLink to="/help">Help</NavLink>
      </li>
    </ul>
  </nav>
);

export default Nav;
