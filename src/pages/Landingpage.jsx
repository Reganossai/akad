import React from "react";
import { Link } from "react-router-dom";
import image from "../assets/image 1.png";
import { ROUTES } from "../constants/routes.constants";

export const Landingpage = () => {
  return (
    <div className="login-div">
      <div className="bg"></div>
      <div className="bgg">
        <img src={image} className="aka" alt="opp" />
        <div className="lolade">
          <button id="aka-1" className="btn btn-primary">
            <Link to={ROUTES.LOGIN}>Login</Link>
          </button>
          <button id="aka-2" className="btn btn-danger">
            <Link to={ROUTES.SIGNUP}>Register</Link>
          </button>
        </div>
      </div>
    </div>
  );
};
