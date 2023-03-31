import { Container, Col, Row } from "reactstrap";
const KamerovySystem = () => {
  return (
    <>
      <h2>( IP / AHD ) SYSTÉM </h2>
      <br />
      <Container>
        <Row>
          <Col className="logomax">
            <img src="./images/patronumlogo.png" />
          </Col>
          <Col className="logomax">
            <img src="./images/cpplus.jpeg" />
          </Col>
          <Col className="logomax">
            <img src="./images/jablotron.png" />
          </Col>
          <Col className="logomax">
            <img src="./images/hikvision.png" />
          </Col>
        </Row>
      </Container>
      <br />
      <h2 className="underline">
        Provádíme instalace, servis a modernizace kamerového systému v rodinných
        a spol. bytových domech.
      </h2>
      <br />
      <br />
      Instalujeme dodávané kvalitní kamery např. FULL HD technologie IP / AHD
      systému značek PATRONUM, CP PLUS, HIKVISION apod. Námi nabízené kamerové
      komplety sestavujeme z kvalitních komponentů se zajištěním záručním a
      pozáručním servisem. <br /> <br />
      <div className="list">
        <br />
        <span className="underline">
          Instalace ( servis ) kamerového kompletu zahrnuje:
        </span>
        <ul>
          <br />
          <li>výjezd (doprava )</li>
          <li>
            sestavení IP nebo AHD kompletu včetně instalace na příslušné místo
            objektu
          </li>
          <li>přesné nastavení kamery</li>
          <li>
            zavedení svodu UTP nebo multikabelem vč. napájení Poe / DC zakončený
            konektorem
          </li>
          <li>
            propojení všech komponentů a instalace s dálkovým dohledem pomocí
            PC, aplikace
          </li>
          <li>instrukáž</li>
        </ul>
      </div>
      <br />
      <img
        className="floating"
        src="./images/ahd.jpg"
        width={100}
        height={100}
      />
      <p>
        AHD kamerové systémy doporučujeme pro jednodušší instalace, jako jsou
        rodinné domy, chaty, restaurace, malé obchody a menší firmy, kde je
        možné snadno realizovat propojení kamer a rekordéru pomocí kabelu a není
        zde požadavek na bezdrátové rozvody a složitější infrastrukturu.
        <br />
        <br /> Jedná se o nejnovější technologii kamerového systému. Je unikátní
        analogovou technologií pro přenost obrazu ve vysokém HD rozlišení po
        koaxiálním kabelu ( multikabelu ) nebo po UTP kabelu pomocí s UTP
        převodníku. Výhodou je menší pořizovací cena než u IP systému.
      </p>
      <br />
      <br />
      <hr />
      <img
        className="floating"
        src="./images/ip.jpg"
        width={100}
        height={100}
      />
      <p>
        IP kamerové systémy doporučujeme tam, kde je potenciál rozšířování počtu
        kamer - monitoring rozsáhlejších komplexů více budov, jako jsou výrobny,
        haly, sklady, logistické areály apod. Použití IP kamerového systému je
        vhodný také pro rodinný dům, kde je požadavek na monitoring domu s
        oddělenými garážemi, zahradním domkem atd.
        <br />
        <br />
        Jedná se o novou technologii využívající počítačovou ( digitální ) LAN
        síť pro přenos obrazu. Vyznačuje se především velkým rozlišením obrazu
        např 4K. Nevýhodou této technologie je poměrně vyšší pořizovací cena než
        u AHD systému.
      </p>
    </>
  );
};
export default KamerovySystem;
