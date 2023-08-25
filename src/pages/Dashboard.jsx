import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { Link } from "react-router-dom";
import { ROUTES } from "../constants";

export const Dashboard = ({username}) => {
  const userName = localStorage.getItem('username');
  return (
    <div className="dashboard-div">
      <Navbar />
      <Sidebar />
      <div className="ovrl">
        <h1>Welcome, {userName}</h1>
        <h6>Start Managing your Admission Process</h6>
        <div className="admission-status-flex">
          <div className="admission-status">
            <h4>Admission Status</h4>
            <h4 className="hawai">No Admission Data</h4>
            <Link to={ROUTES.ADMISSION}>Apply Now</Link>
          </div>
          <div className="general-info">
            <h4>The school General Info will appear here</h4>
          </div>
        </div>
      </div>
    </div>
  );
};


