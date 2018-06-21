import React, { Component } from "react";
import { Link } from "react-router-dom";

const NavButton = props => {
  return (
    <Link className="btn btn-primary" to={props.to}>
      {props.children}
    </Link>
  );
};

export default NavButton;
