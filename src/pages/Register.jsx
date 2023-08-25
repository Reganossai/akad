import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ROUTES } from "../constants/routes.constants";

export const Register = () => {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const history = useHistory();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    fullname: "",
  });

  const result = (e) => {
    e.preventDefault();
    setLoading(true);
    

    const body = {
      fullname: formData.fullname,
      email: formData.email,
      password: formData.password,
    };

    axios({
      method: "post",
      url: "https://akademia-backend.onrender.com/api/v1/users/register",
      data: body,
    })
      .then((response) => {
        console.log(response.data);
        history.push("/auth/registration-successfull")
        }
      )
      .catch((error) => {
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
    <div className="register-div">
      <div className="bg"></div>
      <div className="bgg">
        <div className="register-header">
          <img
            src="https://s3-alpha-sig.figma.com/img/3d3d/4674/322bf368d5461362a8ce46f551647e93?Expires=1691971200&Signature=JWmP8Maf3cRiJEqDIAr93zMTJMbOq90Zi7Ub6rE8Q~SyLpKaK9C4imMXEqKCQiIWETwrzX5e3Rab6dUYJXcku70v1G1On8hg31EW5nQbbXDVurvjNPEBg3F9io4vEZpB0UCr07oei28wUiRvz44hE5uqAboNJ7sECLr2vswJBwhLynJXp1meeT8ibnfZNf3fxeORYzV9ASxPpP4YsCrr1TXkts0QDgXvSHRiKI4R4ZonDGfqbPk~1TcivL7IfUjfvi~4lTMVwRDChRtaQNgTv3NnIfAPVioW1X79~~Y42eivx7eLDEi2qeAnDr124CGv3BhYKj1zpx7axenz0zTh~A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
            className="akademia"
            alt="background"
          />
          <h2>Sign Up</h2>
        </div>
        <form onSubmit={result}>
          <div className="inp-4 ">
            <label htmlFor="city">Full Name</label>
            <input
              type="text"
              placeholder="Enter Full Name"
              name="fullname"
              required
              value={formData.fullname}
              onChange={handleChange}
            />
          </div>

          <div className="inp-1">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              placeholder="Enter Email"
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
          <p className="user-exists">{message}</p>
          <button id="login-btn" className="btn btn-primary">
            Sign Up
          </button>
          <div className="reg-to-login">
            <Link className="first-link" to={ROUTES.LOGIN}>
              Have an account?
            </Link>
            <span className="register-login-span">
              <Link to="/login">Login</Link>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

