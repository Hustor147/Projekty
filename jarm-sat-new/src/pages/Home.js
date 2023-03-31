import { Container, Row, Col } from "reactstrap";
import "./Home.css";
import Sky from "../components/Sky";
import Cards from "../components/Cards";

const Home = () => {
  return (
    <>
      <div>
        <div className="contentBox">
          <Cards />
          <h1>Home</h1>
          <p className="popisky">
            Už více jak 20let se specializujeme na výstabě a správě televizních,
            satelitních a kamerových rozvodù v individuálních rodinných nebo ve
            společných bytových domech s rozvojem nových technologií. Jsme
            servisní partneři satelitní a internetové televize Skylink, Freesat
            a Telly. Nainstalujeme veškeré komponenty pro kvalitní příjem ( STA
            - DVBT2 / DVBS2 ). Působíme v jihočeském kraji, konkrétně v okrese
            Tábor, ale instalace, renovace nebo servis provádíme také například
            v okrese Jihdřichùv Hradec, Pelhřimov, České Budějovice, Písek,
            Benešov apod. Našim cílem je spokojenost zákazníka a proto
            instalace, servis provádíme, odborně, svědomitě s precizním
            výsledkem.
          </p>

          <Container>
            <Row className="justify-content-center center">
              <Col xs="12" md="4">
                <img src="./images/settopbox.jpg" />
                <h3>
                  Poradenství prodej a montáž satelitních a DVB-T2 kompletů
                </h3>
                <p>
                  Spolu vybereme nejvhodnější řešení pro Váš satelitní nebo
                  DVB-T2 komplet. Namontujeme antény, kabely - vše rychle, čistě
                  a důkladně.
                </p>
              </Col>
              <Col xs="12" md="4">
                <img src="./images/tv.jpg" />
                <h3>
                  Nastavení antény a naladění programů je u nás samozřejmostí
                </h3>
                <p>
                  Správné nastavení antény / paraboly je základ pro příjem
                  kvalitního signálu bez trhání nebo kostičkování obrazu.
                </p>
              </Col>
              <Col xs="12" md="4">
                <img src="./images/kamera.jpg " />
                <h3>Montujeme i prodáváme kamerové systémy</h3>
                <p>
                  Zabezpečte s námi svůj majetek s ověřenými systémy s možností
                  záznamu.
                </p>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
};
export default Home;
