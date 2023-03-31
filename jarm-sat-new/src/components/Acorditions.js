import React, { useState } from "react";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from "reactstrap";
import "./Acorditions.css";

import AntenniSystem from "./AntenniSystem";
import SatelitniSystem from "./SatelitniSystem";
import KamerovySystem from "./KamerovySystem";
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
            <AntenniSystem />
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="2">Satelitní systémy</AccordionHeader>
          <AccordionBody accordionId="2">
            <SatelitniSystem />
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="3">Kamerové systémy</AccordionHeader>
          <AccordionBody accordionId="3">
            <KamerovySystem />
          </AccordionBody>
        </AccordionItem>
      </Accordion>
    </div>
  );
}

export default Accordions;
