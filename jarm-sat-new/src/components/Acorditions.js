import React, { useState } from "react";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from "reactstrap";

function Accordions(props) {
  const [open, setOpen] = useState("1");
  const toggle = (id) => {
    if (open === id) {
      setOpen();
    } else {
      setOpen(id);
    }
  };

  return (
    <div>
      <Accordion open={open} toggle={toggle}>
        <AccordionItem>
          <AccordionHeader targetId="1">Anténní systémy</AccordionHeader>
          <AccordionBody accordionId="1">
            <img src="./images/ant1.jpg" />
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="2">Satelitní systémy</AccordionHeader>
          <AccordionBody accordionId="2">
            SATELITNÍ ( DVB S2 ) SYSTÉM Instalujeme dodávané satelitní komplety
            nebo zakoupené jinde. Námi nabízené satelitní komplety sestavujeme z
            kvalitních komponentů se zajištěním záručním a pozáručním servisem.
            Instalace ( servis ) satelitního kompletu zahrnuje: - výjezd (
            doprava ) - sestavení satelitního kompletu včetní instalace na
            výložník nebo na stožár - přesné nastavení satelitní paraboly na
            příslušnou družici podle měřícího přístroje - zavedení svodu
            koaxiálním kabelem zakončený zásuvkou nebo koncovkou - propojení
            všech komponentů a naladění příjímače ( TV ) - instrukáž Výhody a
            nevýhody satelitní televize Hlavní výhodou satelitnlího příjmu je
            široká nabídka programů v HD kvalití včetní množství zajímavých
            programů šířený zdarma. Satelitní televize dává dívákovi vítší
            svobodu než u bížné antény, která je omezena počtem základních
            programů. Například zde máte k dispozici desítky hudebních stanic,
            ale i různé neplacené sportovní programy. Samozřejmostí jsou
            zpravodajská a dokumentární stanice, které jinde nenajdete. Pokrytí
            satelitním signálem je sice teoreticky stoprocentní, v praxi můžete
            narazit na níkolik problémů. Především, protřebujete výhled na
            oblohu a váš byt musí být orientován jížním smírem. Problém může
            nastat, když ve výhledu na obížnou dráhu Zemí brání vzrostlé stromy
            nebo jiná překážka. Satelitní příjem je nachylný na výkyvy počasí.
            Příjem se zejména zhoršuje při bouřkách nebo při hustém snížení
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="3">Kamerové systémy</AccordionHeader>
          <AccordionBody accordionId="3">
            KAMEROVÝ ( IP / AHD ) SYSTÉM Provádíme instalace, servis a
            modernizace kamerového systému v rodinných a spol. bytových domech.
            Instalujeme dodávané kvalitní kamery např. FULL HD technologie IP /
            AHD systému značek PATRONUM, CP PLUS, HIKVISION apod. Námi nabízené
            kamerové komplety sestavujeme z kvalitních komponentů se zajištěním
            záručním a pozáručním servisem. Instalace ( servis ) kamerového
            kompletu zahrnuje: - výjezd ( doprava ) - sestavení IP nebo AHD
            kompletu včetně instalace na příslušné místo objektu - přesné
            nastavení kamery - zavedení svodu UTP nebo multikabelem vč. napájení
            Poe / DC zakončený konektorem - propojení všech komponentů a
            instalace s dálkovým dohledem pomocí PC, aplikace - instrukáž AHD
            kamerové systémy doporučujeme pro jednodušší instalace, jako jsou
            rodinné domy, chaty, restaurace, malé obchody a menší firmy, kde je
            možné snadno realizovat propojení kamer a rekordéru pomocí kabelu a
            není zde požadavek na bezdrátové rozvody a složitější
            infrastrukturu. Jedná se o nejnovější technologii kamerového
            systému. Je unikátní analogovou technologií pro přenost obrazu ve
            vysokém HD rozlišení po koaxiálním kabelu ( multikabelu ) nebo po
            UTP kabelu pomocí s UTP převodníku. Výhodou je menší pořizovací cena
            než u IP systému. IP kamerové systémy doporučujeme tam, kde je
            potenciál rozšířování počtu kamer - monitoring rozsáhlejších
            komplexů více budov, jako jsou výrobny, haly, sklady, logistické
            areály apod. Použití IP kamerového systému je vhodný také pro
            rodinný dům, kde je požadavek na monitoring domu s oddělenými
            garážemi, zahradním domkem atd. Jedná se o novou technologii
            využívající počítačovou ( digitální ) LAN síť pro přenos obrazu.
            Vyznačuje se především velkým rozlišením obrazu např 4K. Nevýhodou
            této technologie je poměrně vyšší pořizovací cena než u AHD systému.
          </AccordionBody>
        </AccordionItem>
      </Accordion>
    </div>
  );
}

export default Accordions;
