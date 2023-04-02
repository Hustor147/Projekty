import { Container, Row, Col } from "reactstrap";
import ReferenceTable from "../components/ReferenceTable";

const Reference = () => {
  return (
    <>
      <Container>
        <Row>
          <Col sm={12}>
            <br />
            <h3 className="center">
              Zde něco málo z historie námi provedených montáží ...
            </h3>
            <br />
            <ReferenceTable />
            <br />
            <h3 className="center">
              ... a mnoho dalších míst, kde jsme od průzkumu až po realizaci
              instalovali anténní, satelitní a kamerový systém.
            </h3>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default Reference;
