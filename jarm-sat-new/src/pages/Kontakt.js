import { Col, Container, Row } from "reactstrap";
import Map from "../components/Map";
const Kontakt = () => {
  return (
    <>
      <div className="contentBox">
        <h1>Kontakt</h1>
        <p className="popisky">
          <Container>
            <Row>
              <Col xs={0} sm={4}></Col>
              <Col xs={12} sm={4}>
                <br />
                <h2>Milan Jarolímek</h2>
                <br />

                <p>
                  Sídlo
                  <br />
                  Příběnická 23
                  <br />
                  390 75 Malšice
                </p>
              </Col>

              <Col xs={12} sm={4}>
                <a href="tel:+420123456789">+420 123 456 789</a>
                <br />
                <a href="mailto:jarolimek@seznam.cz">Napsat mail</a>
              </Col>
            </Row>
          </Container>
          <Map />
        </p>
      </div>
    </>
  );
};
export default Kontakt;
