import React from "react";
//import { Link } from "react-router-dom";

const NavButton = props => {
  return (
    <li>
      <a href={props.to}>{props.children}</a>
    </li>
  );
};

export default NavButton;
