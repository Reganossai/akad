import React, { useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Menu from "./Menu";
import { Link } from "react-router-dom";
import axios from "axios";
import { useHistory } from "react-router-dom";

export const Personalinformation = () => {
  const history = useHistory();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    otherName: "",
    email: "",
    phone: "",
    gender: "",
    dob: "",
    address: "",
    select: "",
    picture: null,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, picture: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    for (const key in formData) {
      formDataToSend.append(key, formData[key]);
    }

    try {
      const response = await axios.post('https://akademia-backend.onrender.com/api/v1/users/personal-information', formDataToSend);
      console.log(response.data);
      // Handle success or show a success message to the user
      history.push("/dasboard/admission/guardian-information")
    } catch (error) {
      console.error(error);
      // Handle error or show an error message to the user
    }
  };


  return (
    <div>
      <Navbar />
      <Sidebar />
      <div className="ovrl">
        <h1>Admission Form</h1>
        <h6>Start Applying for Admission </h6>
        <Menu />
        <form onSubmit={handleSubmit} encType="multipart/form-data">
          <div className="three-flex">
            <div className="inp-2">
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                placeholder="First Name"
                name="firstName"
                required
                value={formData.firstName}
                onChange={handleChange}
              />
            </div>

            <div className="inp-2">
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                placeholder="Last Name"
                name="lastName"
                required
                value={formData.lastName}
                onChange={handleChange}
              />
            </div>

            <div className="inp-2">
              <label htmlFor="otherName">Other Name</label>
              <input
                type="text"
                placeholder="Other Name"
                name="otherName"
                required
                value={formData.otherName}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="three-flex">
            <div className="inp-2">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                placeholder="Email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div className="inp-2">
              <label htmlFor="phone">Phone</label>
              <input
                type="text"
                placeholder="+234 000 0000 000"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
              />
            </div>

            <div className="inp-2">
              <label htmlFor="gender">Gender</label>
              <input
                type="text"
                placeholder="Male"
                name="gender"
                required
                value={formData.gender}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="three-flex">
            <div className="inp-2">
              <label htmlFor="phone">Address</label>
              <input
                type="text"
                placeholder="Address"
                name="address"
                required
                value={formData.address}
                onChange={handleChange}
              />
            </div>

            <div className="inp-2">
              <label htmlFor="dob">Date of Birth</label>
              <input
                type="text"
                placeholder="01-09-2003"
                name="dob"
                required
                value={formData.dob}
                onChange={handleChange}
              />
            </div>

            <div className="inp-2">
              <label htmlFor="select">Select Class</label>
              <input
                type="text"
                placeholder="Select Class"
                name="select"
                required
                value={formData.select}
                onChange={handleChange}
              />
            </div>
          </div>  
          <div className="inp-2">
            <div className="pass">
              <label htmlFor="passport">Upload Passport</label>
              <input
                type="file"
                placeholder="Passport"
                name="picture"
                onChange={handleFileChange}
                required
              />
            </div>
          </div>

          <button type="submit" className="btn btn-primary" id="bt-next">
        Next
          </button>
        </form>
      </div>
    </div>
  );
};