import React from "react";
import { IconButton } from "@mui/material";
import { Link } from "react-router-dom";

const NavItem = ({ link, icon: Icon }) => {
  return (
    <li className="l-header__nav-item">
      <Link to={link}>
        <IconButton>
          <Icon className="l-header__nav-icon" />
        </IconButton>
      </Link>
    </li>
  );
};

export default NavItem;
