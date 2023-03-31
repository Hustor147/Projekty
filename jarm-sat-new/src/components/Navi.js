import React, { useState } from "react";
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
  const topNavi = -142;
  function handleNavLinkClick(event) {
    event.preventDefault();
    const targetId = event.currentTarget.getAttribute("href");
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      const elementOffsetTop = targetElement.offsetTop;
      window.scrollTo({
        top: elementOffsetTop + topNavi,
        behavior: "smooth",
      });
    }
  }

  return (
    <div>
      <Navbar id="navi" color="light" expand="md" className="contentBox">
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
              <NavLink href="/">O nás</NavLink>
            </NavItem>

            <NavItem style={{ paddingLeft: "10px" }}>
              <NavLink href="Nabizime">Nabízíme</NavLink>
            </NavItem>
            <NavItem style={{ paddingLeft: "10px" }}>
              <NavLink href="Reference">Reference</NavLink>
            </NavItem>
            <NavItem style={{ paddingLeft: "10px" }}>
              <NavLink href="NasePrace">Naše práce</NavLink>
            </NavItem>
            <NavItem style={{ paddingLeft: "10px" }}>
              <NavLink href="Kontakt">Kontakt</NavLink>
            </NavItem>
          </Nav>
          {/* <NavbarText>Simple Text</NavbarText> */}
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Navi;
