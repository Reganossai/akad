import React from "react";
import { NavLink } from "react-router-dom";
import { ROUTES } from "../constants";

const Menu = () => {
  return (
    <nav id="menu-menu">
        <ul>
      <li>
        <NavLink activeClassName="active" to={ROUTES.PERSONAL_INFORMATION}>Personal Information</NavLink>
      </li>
      <li>
        <NavLink activeClassName="active"  to={ROUTES.GUARDIAN_INFORMATION}>Guardian/Parent Information</NavLink>
      </li>

      <li>
        <NavLink activeClassName="active"  to={ROUTES.PREVIOUS_EDUCATION}>Previous Education</NavLink>
      </li>
      </ul>
    </nav>
  );
};

export default Menu;
