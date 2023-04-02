import "./Sky.css";
import { Container, Col, Row } from "reactstrap";

const Sky = () => {
  return (
    <>
      <div id="sky">
        <div>
          <Container>
            <Row>
              <Col className="header" xs={12} md={4}>
                <h1>Milan Jarolímek</h1>
                {/* <br /> */}
                <h4>
                  <a href="tel:+420728010284">tel:(+420) 728 010 284</a>
                </h4>
              </Col>
              <Col className="header mid">
                <h1>
                  ANTÉNY - SATELITY <br /> PRODEJ - MONTÁŽ <br />
                  KAMEROVÉ SYSTÉMY
                </h1>
              </Col>
              <Col className="lada d-none d-md-flex">
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
