import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faBars } from "@fortawesome/free-solid-svg-icons";
import { faChartSimple, faGraduationCap, faUserPen } from "@fortawesome/free-solid-svg-icons";
import image from "../assets/image 1.png";
import user from "../assets/user.png";
import { useCallback } from "react";
import { connect } from "react-redux";
import { saveAuthToken } from "../redux/Auth/auth-actions";
import { useHistory } from "react-router-dom";
import { ROUTES } from "../constants/routes.constants";

const Navbar = ({saveToken}) => {
  const [nav, setNav] = useState(false);
  const history = useHistory();

  const handleNav = () => {
    setNav(!nav);
  };
  
  const userName = localStorage.getItem('username');
  const handleLogout = useCallback(() => {
    saveToken("");
    history.push(ROUTES.LOGIN)
  }, [saveToken]);

  nav
    ? (document.body.style.overflowX = "hidden")
    : (document.body.style.overflow = "auto");
  return (
    <div className="nav-usa">
      <nav className="navbar navbar-expand-lg">
        <Link to={ROUTES.DASHBOARD}>
          <img src={image} className="logoo" alt="logoo" />
        </Link>

        <h2 className="powerfield">Powerfields Group of School</h2>

        <div id="navbarSupportedContent">
          <ul>
            
            <li className="nav-link">
              <img src={user} className="reg" alt="user" />
              <span className="user-name"> {userName}</span>
            </li>

            <li>
              <button id="logout-bt-desktop" className="btn btn-primary" onClick={handleLogout}>Log out</button>
            </li>


            <div onClick={handleNav} className="zaracho">
              {nav ? (
                <FontAwesomeIcon icon={faXmark} />
              ) : (
                <FontAwesomeIcon icon={faBars} />
              )}
            </div>
          </ul>

          {nav ? (
            <div id="navbarSupportedContentMobile">
              <ul>
                <li id="dash">
                  <NavLink activeClassName="active" to="/dashboard">
                  <span> <FontAwesomeIcon icon={faChartSimple} className="fontawesome-sidebar"/></span> Dashboard
                  </NavLink>
                </li>
                <hr className="hop" />
                <li id="adm">
                  <NavLink activeClassName="active" to={ROUTES.ADMISSION}>
                  <span> <FontAwesomeIcon icon={faGraduationCap} className="fontawesome-sidebar"/></span>  Admission
                  </NavLink>
                </li>

                <hr className="hop" />
                <li id="prof">
                  <NavLink activeClassName="active" to="#">
                  <span> <FontAwesomeIcon icon={faUserPen} className="fontawesome-sidebar"/></span>  Profile
                  </NavLink>
                </li>

                <hr className="hop" />
                <li>
                  <button onClick={handleLogout} className="btn btn-danger">Logout</button>
                </li>
                
              </ul>
            </div>
          ) : null}
        </div>
      </nav>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    token: state.auth.token,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    saveToken: (token) => dispatch(saveAuthToken(token)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
