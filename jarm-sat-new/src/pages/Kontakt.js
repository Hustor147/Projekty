import { Col, Container, Row } from "reactstrap";
import Map from "../components/Map";

const Kontakt = () => {
  return (
    <>
      <div className="contentBox">
        <p className="popisky">
          <Container>
            <Row>
              <Col xs={0} sm={3}></Col>
              <Col xs={12} sm={6} className="center">
                <br />
                <h2>Milan Jarolímek</h2>
                <br />

                <h5>
                  Příběnická 23
                  <br />
                  390 75 Malšice
                </h5>
                <br />

                <p>
                  Telefon:
                  <br />
                  <a href="tel:+420728010284">728 010 284</a>
                </p>
                <p>
                  Email:
                  <br />
                  <a href="mailto:jarolimek@seznam.cz">
                    milan.jarolimek@seznam.cz
                  </a>
                  <br />
                  <a href="mailto:jarm.sat@seznam.cz">jarm.sat@seznam.cz</a>
                </p>
              </Col>

              <Col xs={12} sm={3}></Col>
            </Row>
          </Container>
          <Map />
        </p>
      </div>
    </>
  );
};
export default Kontakt;
