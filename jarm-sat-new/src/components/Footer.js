import { Container, Col, Row } from "reactstrap";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <Container className="contentBox">
        <Row>
          <Col xs="12" sm="6">
            <p id="left">Copyright © 2023, Milan Jarolímek</p>
          </Col>
          <Col xs="12" sm="6">
            <p id="right">Webdesign kl147</p>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default Footer;
