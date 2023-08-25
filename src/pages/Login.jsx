import React from "react";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
import { useState, useEffect, useCallback } from "react";
import { connect } from "react-redux";
import { saveAuthToken } from "../redux/Auth/auth-actions";
import { ROUTES } from "../constants/routes.constants";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = ({ saveToken }) => {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const history = useHistory();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [isChecked, setIsChecked] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (event) => {
    // Access the new value of the checkbox from the event object
    const newValue = event.target.checked;
    // Update the state to track the checkbox value
    setIsChecked(newValue);
  };

  const result = (e) => {
    e.preventDefault();
    setLoading(true);

    const body = {
      email: formData.email,
      password: formData.password,
    };

    axios({
      method: "post",
      url: "https://akademia-backend.onrender.com/api/v1/users/login",
      data: body,
    })
      .then((response) => {
        const token = response.data._id;

        const saveUserTokenInLocalStorage = localStorage.setItem(
          "user-token",
          token
        );
        saveToken(token);
        setLoading(false);
        console.log(response.data);
        const username = response.data.fullname;
        const saveUsernameInLocalStorage = localStorage.setItem(
          "username",
          username
        );
        history.push("/dashboard");
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.response.data.message)
        
      })
      .finally(() => {
        setLoading(false);
      });
  };

  if (loading) {
    return (
      <h1 className="login-loading">
        Please wait...
      </h1>
    );
  }

  return (
    <div className="login-div">
      <div className="bg"></div>
      <div className="bgg">
        <div className="login-header">
          <img
            src="https://s3-alpha-sig.figma.com/img/3d3d/4674/322bf368d5461362a8ce46f551647e93?Expires=1691971200&Signature=JWmP8Maf3cRiJEqDIAr93zMTJMbOq90Zi7Ub6rE8Q~SyLpKaK9C4imMXEqKCQiIWETwrzX5e3Rab6dUYJXcku70v1G1On8hg31EW5nQbbXDVurvjNPEBg3F9io4vEZpB0UCr07oei28wUiRvz44hE5uqAboNJ7sECLr2vswJBwhLynJXp1meeT8ibnfZNf3fxeORYzV9ASxPpP4YsCrr1TXkts0QDgXvSHRiKI4R4ZonDGfqbPk~1TcivL7IfUjfvi~4lTMVwRDChRtaQNgTv3NnIfAPVioW1X79~~Y42eivx7eLDEi2qeAnDr124CGv3BhYKj1zpx7axenz0zTh~A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
            className="akademia"
            alt="background"
          />
          <h2>Login</h2>
        </div>
        <form onSubmit={result}>
          <div className="inp-1">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              placeholder="Enter your Email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="inp-2">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              placeholder="Enter Password"
              name="password"
              required
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <p className="wrong-pass">{message}</p>
          <div className="inp-3">
            <input
              type="checkbox"
              checked={isChecked} // Use the state variable to determine the checked status
              onChange={handleCheckboxChange}
            />

            <h4>Remember me</h4>
            <h5>
              <Link to="">Forgot password?</Link>
            </h5>
          </div>

          <p className="err-mess">{message}</p>

          <button id="login-btn" className="btn btn-primary">
            Login
          </button>
          <div className="login-to-reg">
            <Link to={ROUTES.SIGNUP}>Create account</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    saveToken: (token) => dispatch(saveAuthToken(token)),
  };
};

export const Login = connect(null, mapDispatchToProps)(App);
