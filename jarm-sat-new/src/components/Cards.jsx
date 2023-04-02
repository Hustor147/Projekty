import { useState } from "react";
import { Link } from "react-router-dom";
//import { Link, animateScroll as scroll } from "react-scroll";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  Button,
  Modal,
  ModalBody,
  CloseButton,
} from "reactstrap";
import AntenniSystem from "./AntenniSystem";
import "./Cards.css";
import KamerovySystem from "./KamerovySystem";
import SatelitniSystem from "./SatelitniSystem";

const Cards = () => {
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);

  const openModal1 = () => {
    setIsOpen1(true);
  };

  const closeModal1 = () => {
    setIsOpen1(false);
  };

  const openModal2 = () => {
    setIsOpen2(true);
  };

  const closeModal2 = () => {
    setIsOpen2(false);
  };
  const openModal3 = () => {
    setIsOpen3(true);
  };

  const closeModal3 = () => {
    setIsOpen3(false);
  };
  return (
    <>
      <Container id="cards">
        <Row>
          <Col xs="12" sm="12" md="4">
            <Card>
              <img src="./images/antenasys.jpg" />
              <CardBody>
                <Button className="btncenter" onClick={openModal1}>
                  Anténní systém
                </Button>
                <Modal
                  className="modalSize"
                  isOpen={isOpen1}
                  onRequestClose={closeModal1}
                  toggle={closeModal1}
                  style={{ content: { Width: "1000px" } }}
                >
                  <Button className="closeButton" onClickCapture={closeModal1}>
                    <CloseButton
                      className="closeButtonclose"
                      onClickCapture={closeModal1}
                    />
                  </Button>
                  <br />
                  {/* <h2 className="modalNadpisStred">Anténní (DVB-T2) systém</h2> */}
                  <br></br>
                  <AntenniSystem />
                </Modal>
              </CardBody>
            </Card>
          </Col>
          <Col xs="12" sm="12" md="4">
            <Card>
              <img src="./images/satelitsys.jpg" />
              <CardBody>
                <Button onClick={openModal2}>Satelitní systém</Button>
                <Modal
                  className="modalSize"
                  isOpen={isOpen2}
                  onRequestClose={closeModal2}
                  toggle={closeModal2}
                  style={{ content: { Width: "1000px" } }}
                >
                  <Button className="closeButton" onClickCapture={closeModal2}>
                    <CloseButton
                      className="closeButtonclose"
                      onClickCapture={closeModal2}
                    />
                  </Button>
                  <br />
                  <SatelitniSystem />
                </Modal>
              </CardBody>
            </Card>
          </Col>
          <Col xs="12" sm="12" md="4">
            <Card>
              <img src="./images/kamerasys.jpg" />
              <CardBody>
                <Button onClick={openModal3}>Kamerový systém</Button>
                <Modal
                  className="modalSize"
                  isOpen={isOpen3}
                  onRequestClose={closeModal3}
                  toggle={closeModal3}
                  style={{ content: { Width: "1000px" } }}
                >
                  <Button className="closeButton" onClickCapture={closeModal3}>
                    <CloseButton
                      className="closeButtonclose"
                      onClickCapture={closeModal3}
                    />
                  </Button>
                  <br />
                  <KamerovySystem />
                </Modal>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default Cards;
