import "./Sky.css";
import { Container, Col, Row } from "reactstrap";
const Sky = () => {
  return (
    <>
      <div id="sky">
        <div className=" contentBox">
          <Container>
            <Row>
              <Col className="header" xs={12} md={4}>
                <h1>Milan Jarolímek</h1>
                <br />
                <h4>
                  <a href="tel:+420728010284">tel:+420728010284</a>
                </h4>
              </Col>
              <Col>
                <h3 className="header">
                  ANTENY - SATELITY <br /> PRODEJ - MONTAZ <br />
                  KAMEROVÉ SYSTEMY
                </h3>
              </Col>
              <Col className="d-none d-md-block">
                <img src="./images/sat250.png" />
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
};
export default Sky;
