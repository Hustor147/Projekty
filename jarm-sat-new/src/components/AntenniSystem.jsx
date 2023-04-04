import { Container, Row, Col } from "reactstrap";
const AntenniSystem = () => {
  return (
    <>
      <h2 id="antenniSystem">( DVB-T2 ) SYSTÉM</h2> <br />
      <Container>
        <Row>
          <Col className="logomax">
            <img src="./images/gosat.jpg" />
          </Col>
          <Col className="logomax">
            <img src="./images/alcad.png" />
          </Col>
          <Col className="logomax">
            <img src="./images/ikusilogo.png" />
          </Col>
          <Col className="logomax">
            <img src="./images/emmeesse.png" />
          </Col>
          <Col className="logomax">
            <img src="./images/Evercon.png" />
          </Col>
          <Col className="logomax">
            <img src="./images/televes.png" />
          </Col>
        </Row>
      </Container>
      <br />
      <h2 className="underline">
        Provádíme instalace, servis a modernizace televizních antén v rodinných
        a spol. bytových domech.
      </h2>
      <br />
      Instalujeme dodávané uhf antény nebo zakoupené jinde. Námi nabízené
      anténní komplety sestavujeme z kvalitních komponentů se zajištěním
      záručním a pozáručním servisem. <br />
      <br />
      <br />
      <div className="list">
        <br />
        <img className="floatingR" src="./images/DVB.JPG" width={80} />
        <span className="underline">
          Instalace ( servis ) anténního kompletu zahrnuje:
        </span>

        <ul>
          <br />
          <li>výjezd ( doprava )</li>
          <li>
            sestavení anténního kompletu včetně instalace na výložník nebo na
            stožár
          </li>
          <li>
            přesné nastavení antény na příslušný výsílač podle měřícího
            přístroje
          </li>
          <li>
            zavedení svodu koaxiálním kabelem zakončený zásuvkou nebo koncovkou
          </li>
          <li>propojení všech komponentů a naladění příjímače ( TV )</li>
          <li>instrukáž</li>
        </ul>
      </div>
      <br /> DVB-T2 je nová generace digitalního vysílání, modernější nástupce
      bývalého pozemského digitálního televizního vysílání DVB T. Umožnuje do
      jedné vysílací sítě umístit více televizních programů, dokonce i ve
      vysokém rozlišení obrazu ( HD TV ) a dosáhnout celostátního pokrytí s
      menším počtem frekvencí. <br />
      <br />
      <hr />
      <h5>SPOLEČNÁ TELEVIZNÍ ANTÉNA ( STA ) </h5>
      <br />
      Bytovým družstvům, správcům objektům, hotelům i majitelům rozsáhlejších
      nemovitostí nabízíme kompletní služby spojené s vybudováním, servisem a
      modernizací společných televizních antén.
      <br />
      <br />
      <br />
      <Container className="antenasys">
        <Row>
          <Col xs={12} md={6}>
            <h5 className="underline">Zajišťujeme:</h5>
            <ul>
              <li>opravy a ůdržbu STA</li>
              <li>montáže nových a ůpravu stávajících STA</li>
              <li>posouzení stávajícího stavu STA</li>
              <li>
                návrh na možné rozšíšení a vylepšení novou technologií STA
              </li>
              <li>
                přelazování kanálových zesilovačů ALCAD a přídání LTE filtr
              </li>
            </ul>
          </Col>
          <Col xs={6} md={3}>
            <img className="floatingSTA" src="./images/sta1.gif" />
            <p className="center">
              Starší systém <br />
              (Kaskádový rozvod)
            </p>
          </Col>
          <Col xs={6} md={3}>
            <img className="floatingSTA" src="./images/sta2.gif" />
            <p className="center">
              Nový systém
              <br />
              (Hvězdicový rozvod)
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default AntenniSystem;
