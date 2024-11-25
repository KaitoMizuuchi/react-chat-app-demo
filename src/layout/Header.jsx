import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import AccountIcon from "@mui/icons-material/AccountCircleOutlined";
import NavItem from "../components/layout/NavItem";

const Header = () => {
  return (
    <header className="l-header">
      <nav className="l-header__nav">
        <ul className="l-header__nav-list">
          <NavItem link="/home" icon={HomeIcon} />
          <NavItem link="/contact" icon={ContactMailIcon} />
          <NavItem link="/login" icon={AccountIcon} />
        </ul>
      </nav>
    </header>
  );
};

export default Header;
