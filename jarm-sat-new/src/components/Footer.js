import { Container, Col, Row } from "reactstrap";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div className="contentBox">
        <Container>
          <Row>
            <Col xs="12" sm="6">
              <p id="left">Copyright © 2023, Milan Jarolímek</p>
            </Col>
            <Col xs="12" sm="6">
              <p id="right">Webdesign k147l</p>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};
export default Footer;
