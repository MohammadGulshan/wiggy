import React from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from "reactstrap";

const AppNavbar = (props) => {
  return (
    <div>
      <Navbar color="success" dark expand="md">
        <NavbarBrand href="/">Wiggy</NavbarBrand>

      </Navbar>
    </div>
  );
};

export default AppNavbar;
