import Accordions from "../components/Acorditions";

import { Container, Row, Col } from "reactstrap";

const Nabizime = () => {
  return (
    <>
      <Container>
        <Row>
          <Col sm={12}>
            <br />
            <br />
            <p>
              Zajištujeme od průzkumu až po realizaci instalaci, servis a
              modernizaci anténního (DVB-T2), satelitního (DVB-S2) a kamerového
              (IP, AHD) systému včetně rozvodů v individuálních a společných
              bytových domech. <br />
              <br />
              Provádíme propojení, ladění televizorů, set top boxů a setřídění
              programů dle přání zákazníka. Nabízíme certifikovaná zařízení
              kodek H265 HEVC pro kvalitní digitální příjem. <br />
              <br />
              Dále úpravu a modernizaci (STA) zahrnující instalaci tzv.
              hvězdicového rozvodu, který umožnuje na jednom místě regulovat
              počet dostupných televizních kanálů pro jednotlivé účastníky a
              zároveň omezit ovlivňování kvality příjmu signálu mezi účastníky
              navzájem.
              <br />
              <br />
              Kompletní instalaci a servis satelitní a internetové televize
              Skylink, Freesat a Telly včetně návrhu a změření signálu.
              <br />
              <br />
              Montáž antén, satelitů a kamerového systému provádíme v krátkém
              termínu. Zajišťujeme záruční a pozáruční servis.
            </p>

            <Accordions />
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default Nabizime;
