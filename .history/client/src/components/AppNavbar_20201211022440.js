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
  // let isOpen = false;
  // const toggle = () => isOpen = !isOpen;
  // return (
  //   <div>
  //     <Navbar color="success" dark expand="md">
  //       <NavbarBrand href="/">Wiggy</NavbarBrand>
  //       <NavbarToggler onClick={toggle} />
  //       <Collapse isOpen={isOpen} navbar>
  //         <Nav className="ml-auto" navbar>
  //           <NavItem>
  //             <NavLink href="/components/">Components</NavLink>
  //           </NavItem>
  //           <NavItem>
  //             <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
  //           </NavItem>
  //           <UncontrolledDropdown nav inNavbar>
  //             <DropdownToggle nav caret>
  //               Account
  //             </DropdownToggle>
  //             <DropdownMenu right>
  //               <DropdownItem>
  //                 Profile
  //               </DropdownItem>
  //               <DropdownItem>
  //                 Orders
  //               </DropdownItem>
  //               <DropdownItem divider />
  //               <DropdownItem>
  //                 Logout
  //               </DropdownItem>
  //             </DropdownMenu>
  //           </UncontrolledDropdown>
  //         </Nav>
  //       </Collapse>
  //     </Navbar>
  //   </div>
  // );
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div>
      <Navbar color="faded" light>
        <NavbarBrand href="/" className="mr-auto">reactstrap</NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink href="/components/">Components</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
};

export default AppNavbar;
