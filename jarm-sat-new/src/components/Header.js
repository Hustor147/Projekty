import { Col, Row, Container, Nav, NavItem, NavLink } from "reactstrap";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import "./Header.css";
import Navi from "./Navi";

const Header = () => {
  return (
    <>
      {/* <Container fluid className="container"> */}

      {/* <div className="owner contentBox">Milan Jarolímek</div> */}

      {/* Obrazek pod navi listou */}

      <Container id="inSky" className="contentBox">
        {/* <Row md="4" sm="2" xs="1">
            <Col xs={{ offset: 4, size: 8 }}>
              <h2 className="heading inSky contentBox">
                Montáže satelitů
                <br></br>
                Anteny DVB-T2
                <br></br>
                Kamerove systemy
              </h2>
            </Col>

            <Col className="column2">tleeidfnisvn sddf adada afda</Col>
          </Row> */}

        {/* <img src="./images/Nebe.jpeg" /> */}
      </Container>

      {/* </Container> */}
    </>
  );
};
export default Header;
