import { useState } from "react";
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
import "./Cards.css";

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
          <Col xs="12" sm="4" md="4">
            <Card>
              <img src="./images/LogoNew.png" />
              <CardBody>
                <Button onClick={openModal1}>Anténní systém</Button>
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
                  <img src="./images/ant1.jpg" />
                  <img src="./images/ant2.jpg" />
                </Modal>
              </CardBody>
            </Card>
          </Col>
          <Col xs="12" sm="4" md="4">
            <Card>
              <img src="./images/LogoNew.png" />
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
                  <h2 className="modalNadpisStred">Satelitní systém</h2>
                  <p className="obsahModalu">
                    Torem ipsum dolor sit amet, consectetuer adipiscing elit.
                    Fusce dui leo, imperdiet in, aliquam sit amet, feugiat eu,
                    orci. Ut enim ad minima veniam, quis nostrum exercitationem
                    ullam corporis suscipit laboriosam, nisi ut aliquid ex ea
                    commodi consequatur? Duis ante orci, molestie vitae vehicula
                    venenatis, tincidunt ac pede. Excepteur sint occaecat
                    cupidatat non proident, sunt in culpa qui officia deserunt
                    mollit anim id est laborum. Nulla quis diam. Sed ut
                    perspiciatis unde omnis iste natus error sit voluptatem
                    accusantium doloremque laudantium, totam rem aperiam, eaque
                    ipsa quae ab illo inventore veritatis et quasi architecto
                    beatae vitae dicta sunt explicabo. Itaque earum rerum hic
                    tenetur a sapiente delectus, ut aut reiciendis voluptatibus
                    maiores alias consequatur aut perferendis doloribus
                    asperiores repellat. Integer tempor. In sem justo, commodo
                    ut, suscipit at, pharetra vitae, orci. Pellentesque sapien.
                    Duis risus. Aliquam erat volutpat. Aliquam ornare wisi eu
                    metus. Nam quis nulla. Aliquam erat volutpat. Suspendisse
                    sagittis ultrices augue. Aliquam in lorem sit amet leo
                    accumsan lacinia. Temporibus autem quibusdam et aut officiis
                    debitis aut rerum necessitatibus saepe eveniet ut et
                    voluptates repudiandae sint et molestiae non recusandae.
                    Aliquam erat volutpat. Nulla pulvinar eleifend sem. Aliquam
                    erat volutpat. Aenean id metus id velit ullamcorper
                    pulvinar. Nullam at arcu a est sollicitudin euismod. In
                    convallis. Nullam faucibus mi quis velit. Donec ipsum massa,
                    ullamcorper in, auctor et, scelerisque sed, est. Fusce
                    tellus. In laoreet, magna id viverra tincidunt, sem odio
                    bibendum justo, vel imperdiet sapien wisi sed libero.
                    Maecenas ipsum velit, consectetuer eu lobortis ut, dictum at
                    dui. Maecenas fermentum, sem in pharetra pellentesque, velit
                    turpis volutpat ante, in pharetra metus odio a lectus.
                  </p>
                </Modal>
              </CardBody>
            </Card>
          </Col>
          <Col xs="12" sm="4" md="4">
            <Card>
              <img src="./images/LogoNew.png" />
              <CardBody>
                <Button onClick={openModal3}>Anténní systém</Button>
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
                  <h2 className="modalNadpisStred">Anténní systém</h2>
                  <p className="obsahModalu">
                    Torem ipsum dolor sit amet, consectetuer adipiscing elit.
                    Fusce dui leo, imperdiet in, aliquam sit amet, feugiat eu,
                    orci. Ut enim ad minima veniam, quis nostrum exercitationem
                    ullam corporis suscipit laboriosam, nisi ut aliquid ex ea
                    commodi consequatur? Duis ante orci, molestie vitae vehicula
                    venenatis, tincidunt ac pede. Excepteur sint occaecat
                    cupidatat non proident, sunt in culpa qui officia deserunt
                    mollit anim id est laborum. Nulla quis diam. Sed ut
                    perspiciatis unde omnis iste natus error sit voluptatem
                    accusantium doloremque laudantium, totam rem aperiam, eaque
                    ipsa quae ab illo inventore veritatis et quasi architecto
                    beatae vitae dicta sunt explicabo. Itaque earum rerum hic
                    tenetur a sapiente delectus, ut aut reiciendis voluptatibus
                    maiores alias consequatur aut perferendis doloribus
                    asperiores repellat. Integer tempor. In sem justo, commodo
                    ut, suscipit at, pharetra vitae, orci. Pellentesque sapien.
                    Duis risus. Aliquam erat volutpat. Aliquam ornare wisi eu
                    metus. Nam quis nulla. Aliquam erat volutpat. Suspendisse
                    sagittis ultrices augue. Aliquam in lorem sit amet leo
                    accumsan lacinia. Temporibus autem quibusdam et aut officiis
                    debitis aut rerum necessitatibus saepe eveniet ut et
                    voluptates repudiandae sint et molestiae non recusandae.
                    Aliquam erat volutpat. Nulla pulvinar eleifend sem. Aliquam
                    erat volutpat. Aenean id metus id velit ullamcorper
                    pulvinar. Nullam at arcu a est sollicitudin euismod. In
                    convallis. Nullam faucibus mi quis velit. Donec ipsum massa,
                    ullamcorper in, auctor et, scelerisque sed, est. Fusce
                    tellus. In laoreet, magna id viverra tincidunt, sem odio
                    bibendum justo, vel imperdiet sapien wisi sed libero.
                    Maecenas ipsum velit, consectetuer eu lobortis ut, dictum at
                    dui. Maecenas fermentum, sem in pharetra pellentesque, velit
                    turpis volutpat ante, in pharetra metus odio a lectus.
                  </p>
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
