import React from "react";

const NavButton = props => {
  return (
    <li>
      <a className="btn" href={props.to}>
        {props.children}
      </a>
    </li>
  );
};

export default NavButton;
