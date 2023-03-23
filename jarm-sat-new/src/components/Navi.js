import React, { useState } from "react";
import { Link } from "react-router-dom";
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
      window.scrollTo({
        top: elementOffsetTop,
        behavior: "smooth",
      });
    }
  }

  return (
    <div>
      <Navbar id="navi" color="light" expand="md">
        <NavbarBrand href="/">
          {/* TADY JE LOGO */}
          <img
            src="./images/LogoNew.png"
            style={{ height: 100, width: 100 }}
          />{" "}
          {/* TADY MUZE BYT NAZEV */}
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav style={{ textAlign: "left" }} navbar>
            <NavItem style={{ paddingLeft: "10px" }}>
              <NavLink href="/">O nas</NavLink>
            </NavItem>
            {/* po kliknuti sjede na urcite misto na strance */}
            <NavItem style={{ paddingLeft: "10px" }}>
              <NavLink href="#section1-target" onClick={handleNavLinkClick}>
                KUK
              </NavLink>
            </NavItem>
            <NavItem style={{ paddingLeft: "10px" }}>
              <NavLink href="#konec" onClick={handleNavLinkClick}>
                Konec
              </NavLink>
            </NavItem>
            <NavItem style={{ paddingLeft: "10px" }}>
              <NavLink href="Nabizime">Nabízíme</NavLink>
            </NavItem>
            <NavItem style={{ paddingLeft: "10px" }}>
              <NavLink href="Reference">Reference</NavLink>
            </NavItem>
            <UncontrolledDropdown style={{ paddingLeft: "10px" }} nav inNavbar>
              <DropdownToggle nav caret>
                Options
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>Option 1</DropdownItem>
                <DropdownItem>Option 2</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Reset</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          {/* <NavbarText>Simple Text</NavbarText> */}
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Navi;
