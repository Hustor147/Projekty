import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navi.css";
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
import "bootstrap/dist/css/bootstrap.min.css";

function Navi(args) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  function handleNavLinkClick(event) {
    event.preventDefault();
    const targetId = event.currentTarget.getAttribute("href");
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      const elementOffsetTop = targetElement.offsetTop;
    }
  }

  return (
    <div className="my-header">
      <Navbar id="navi" color="light" expand="md">
        <Link to="/">
          <NavbarBrand>
            {/* TADY JE LOGO */}
            <img src="./images/LogoNew.png" style={{ height: 100 }} />{" "}
            {/* TADY MUZE BYT NAZEV */}
          </NavbarBrand>
        </Link>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav style={{ textAlign: "left" }} navbar>
            <Link to="/">
              <NavItem style={{ paddingLeft: "10px" }}>
                <NavLink>O nás</NavLink>
              </NavItem>
            </Link>
            <Link to="/Nabizime">
              <NavItem style={{ paddingLeft: "10px" }}>
                <NavLink>Nabízíme</NavLink>
              </NavItem>
            </Link>
            <Link to="/Reference">
              <NavItem style={{ paddingLeft: "10px" }}>
                <NavLink>Reference</NavLink>
              </NavItem>
            </Link>
            <Link to="/NasePrace">
              <NavItem style={{ paddingLeft: "10px" }}>
                <NavLink>Naše práce</NavLink>
              </NavItem>
            </Link>
            <Link to="/Kontakt">
              <NavItem style={{ paddingLeft: "10px" }}>
                <NavLink>Kontakt</NavLink>
              </NavItem>
            </Link>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Navi;
