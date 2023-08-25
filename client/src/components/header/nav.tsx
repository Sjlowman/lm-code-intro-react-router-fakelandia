import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  const activeLink = " text-purple-600";
  const normalLink = "";

  return (
    <React.Fragment>
      <section>
        <div className="flex w-screen">
          <nav className="text-3xl text-bold pt-6 flex-row grid grid-cols-5 w-screen text-center justify-center text-2xl  pb-4">
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
            >
              Home
            </NavLink>

            <NavLink
              to="/allmisdemeanours"
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
            >
              Misdemeanours
            </NavLink>

            <NavLink
              to="/confession"
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
            >
              Confess To Us
            </NavLink>

            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
            >
              About
            </NavLink>

            <NavLink
              to="/help"
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
            >
              Help
            </NavLink>
          </nav>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Nav;
