import { Container, Row, Col } from "reactstrap";

const SatelitniSystem = () => {
  return (
    <>
      <h2>( DVB-S2 ) SYSTÉM</h2> <br />
      <Container>
        <Row>
          <Col></Col>
          <Col className="logomax">
            <img src="./images/skylink.png" />
          </Col>
          <Col className="logomax">
            <img src="./images/freesat.png" />
          </Col>
          <Col className="logomax">
            <img src="./images/telly.png" />
          </Col>
          <Col></Col>
        </Row>
      </Container>
      <h2 className="underline">
        Provádíme instalace, servis a modernizace satelitních platforem{" "}
        <b>Skylink,freeSAT a Telly.</b>
      </h2>
      <br />
      <h4>
        Instalujeme dodávané satelitní komplety nebo zakoupené jinde. Námi
        nabízené satelitní komplety sestavujeme z kvalitních komponentů se
        zajištěním záručním a pozáručním servisem.
      </h4>
      <br />
      <div className="list">
        <br />
        <span className="underline">
          Instalace ( servis ) satelitního kompletu zahrnuje:
        </span>
        <ul>
          <br />
          <li>výjezd ( doprava )</li>
          <li>
            sestavení satelitního kompletu včetně instalace na výložník nebo na
            stožár
          </li>
          <li>
            přesné nastavení satelitní paraboly na příslušnou družici podle
            měřícího přístroje
          </li>
          <li>
            zavedení svodu koaxiálním kabelem zakončený zásuvkou nebo koncovkou
          </li>
          <li>propojení všech komponentů a naladění příjímače ( TV )</li>
          <li>- instrukáž</li>
        </ul>
      </div>
      <br />
      <p>Výhody a nevýhody satelitní televize :</p> <br />
      <br />
      <p>
        <img
          className="floating"
          src="./images/plus.png"
          width={100}
          height={100}
        />
        Hlavní výhodou satelitnlího příjmu je široká nabídka programů v HD
        kvalitě včetně množství zajímavých programů šířený zdarma. Satelitní
        televize dává dívákovi větší svobodu než u běžné antény, která je
        omezena počtem základních programů. Například zde máte k dispozici
        desítky hudebních stanic, ale i různé neplacené sportovní programy.
        Samozřejmostí jsou zpravodajské a dokumentární stanice, které jinde
        nenajdete. <br />
      </p>
      <br />
      <p>
        <img
          className="floating"
          src="./images/minus.png"
          width={100}
          height={100}
        />
        Pokrytí satelitním signálem je sice teoreticky stoprocentní, v praxi
        můžete narazit na několik problémů. Především, protřebujete výhled na
        oblohu a váš byt musí být orientován jížním směrem. Problém může nastat,
        když ve výhledu na oběžnou dráhu Země brání vzrostlé stromy nebo jiná
        překážka. Satelitní příjem je nachylný na výkyvy počasí. Příjem se
        zhoršuje zejména při bouřkách nebo při hustém sněžení.
      </p>
    </>
  );
};
export default SatelitniSystem;
