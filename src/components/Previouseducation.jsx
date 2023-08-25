import React, { useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Menu from "./Menu";
import axios from "axios";
import { useHistory } from "react-router-dom";

export const Previouseducation = () => {
  const history = useHistory();
  const [formData, setFormData] = useState({
    name: "",
    selectClass: "",
    previousResult: null,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, previousResult: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    for (const key in formData) {
      formDataToSend.append(key, formData[key]);
    }

    try {
      const response = await axios.post(
        "https://akademia-backend.onrender.com/api/v1/users/previous-education",
        formDataToSend
      );
      console.log(response.data);
      // Handle success or show a success message to the user
      history.push("/admission-success");
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
              <label htmlFor="password">Name of previous school</label>
              <input
                type="text"
                placeholder="Name of school"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
              />
            </div>

            <div className="inp-2">
              <label htmlFor="selectClass">Class Completed</label>
              <input
                type="text"
                placeholder="Class completed"
                name="selectClass"
                required
                value={formData.selectClass}
                onChange={handleChange}
              />
            </div>

            <div className="inp-2">
              <label htmlFor="result">Upload Previous Result</label>
              <input
                type="file"
                name="previousResult"
                onChange={handleFileChange}
                required
              />
            </div>
          </div>
          <button type="submit" className="btn btn-primary" id="bt-next">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

