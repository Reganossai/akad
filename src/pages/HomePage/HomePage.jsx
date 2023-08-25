import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

export const HomePage_ = ({ token }) => {
  if (token) {
    return <Redirect to="/dashboard" />;
  }
  return <Redirect to="/auth" />;
};

const mapStateToProps = (state) => {
  return {
    token: state.auth.token,
  };
};

export const HomePage = connect(mapStateToProps)(HomePage_);
