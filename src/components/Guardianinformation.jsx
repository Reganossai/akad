import React, { useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Menu from "./Menu";
import { Link } from "react-router-dom";
import axios from "axios";
import { useHistory } from "react-router-dom";

export const Guardianinformation = () => {
  const history = useHistory();
  const [formData, setFormData] = useState({
    guardianFirstName: "",
    guardianLastName: "",
    relationship: "",
    guardianEmail: "",
    guardianPhone: "",
    dob: "",
    nationality: "",
    guardianAddress: "",
    occupation: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };


  
  const handleSubmit = async (e) => {
    e.preventDefault();


    try {
      
    const body = {
      guardianFirstName: formData.guardianFirstName,
      guardianLastName: formData.guardianLastName,
      relationship: formData.relationship,
      guardianEmail: formData.guardianEmail,
      guardianPhone: formData.guardianPhone,
      dob: formData.dob,
      nationality: formData.nationality,
      guardianAddress: formData.guardianAddress,
      occupation: formData.occupation,
    };
      const response = await axios.post('https://akademia-backend.onrender.com/api/v1/users/guardian-information', body);
      console.log(response.data);
      // Handle success or show a success message to the user
      history.push("/dasboard/admission/previous-education")
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
        <form onSubmit={handleSubmit}>
          <div className="three-flex">
            <div className="inp-2">
              <label htmlFor="guardianFirstName">First Name</label>
              <input
                type="text"
                placeholder="First Name"
                name="guardianFirstName"
                required
                value={formData.guardianFirstName}
                onChange={handleChange}
              />
            </div>

            <div className="inp-2">
              <label htmlFor="guardianLastName">Last Name</label>
              <input
                type="text"
                placeholder="Last Name"
                name="guardianLastName"
                required
                value={formData.guardianLastName}
                onChange={handleChange}
              />
            </div>

            <div className="inp-2">
              <label htmlFor="relationship">Relationship</label>
              <input
                type="text"
                placeholder="Relationship"
                name="relationship"
                required
                value={formData.relationship}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="three-flex">
            <div className="inp-2">
              <label htmlFor="guardianEmail">Email</label>
              <input
                type="email"
                placeholder="Email"
                name="guardianEmail"
                required
                value={formData.guardianEmail}
                onChange={handleChange}
              />
            </div>

            <div className="inp-2">
              <label htmlFor="guardianPhone">Phone</label>
              <input
                type="text"
                placeholder="+234 000 0000 000"
                name="guardianPhone"
                required
                value={formData.guardianPhone}
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
          </div>
          <div className="three-flex">
            <div className="inp-2">
              <label htmlFor="nationality">Nationality</label>
              <input
                type="text"
                placeholder="nationality"
                name="nationality"
                required
                value={formData.nationality}
                onChange={handleChange}
              />
            </div>

            <div className="inp-2">
              <label htmlFor="guardianAddress">Address</label>
              <input
                type="text"
                placeholder="Address"
                name="guardianAddress"
                required
                value={formData.guardianAddress}
                onChange={handleChange}
              />
            </div>

            <div className="inp-2">
              <label htmlFor="occupation">Occupation</label>
              <input
                type="text"
                placeholder="Occupation"
                name="occupation"
                required
                value={formData.occupation}
                onChange={handleChange}
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
