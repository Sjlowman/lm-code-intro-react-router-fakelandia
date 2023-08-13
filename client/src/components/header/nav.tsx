import { NavLink } from "react-router-dom";

const Nav: React.FC = () => (
  <div className="relative w-full mt-6 max-w-sm overflow-y-scroll ">
    <nav
      className="is-flex is-flex-grow-1 is-align-items-center"
      style={{ width: "100%" }}
    >
      <NavLink to="/">Home</NavLink>

      <NavLink to="/misdemeanour">Misdemeanours</NavLink>

      <NavLink to="/confession">Confessions</NavLink>

      <NavLink to="/about">About</NavLink>

      <NavLink to="/help">Help</NavLink>

      <NavLink to="/allmisdemeanours">All Misdemeanours</NavLink>
    </nav>
  </div>
);

export default Nav;
