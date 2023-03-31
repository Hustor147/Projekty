import { Table } from "reactstrap";
import "./ReferenceTable";
const ReferenceTable = () => {
  return (
    <>
      <Table
        className="gridLayout"
        borderless
        striped
        // style={{ whiteSpace: "nowrap" }}
      >
        <thead>
          <tr>
            <th xs={3}> </th>
            <th xs={6}>Lokalita</th>
            <th xs={1}> </th>
            <th xs={3}>Typ práce</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>BYTOVÝ DŮM</td>
            <td>Sezimovo Ústí 2 SVJ Lipova 603</td>
            <td>-</td>
            <td>přestavba STA, SAT, instalace 11 IP kam.systému</td>
          </tr>
          <tr>
            <td>PANELOVÝ DŮM</td>
            <td>Tábor SVJ Berlínská 2750</td>
            <td>-</td>
            <td>kompletní výstavba nové STA, 32 bytů</td>
          </tr>
          <tr>
            <td>PANELOVÝ DŮM</td>
            <td>Tábor SVJ Berlínská 2750</td>
            <td>-</td>
            <td>kompletní výstavba nové STA, 32 bytů</td>
          </tr>
             
          <tr>
            <td>BYTOVÝ DŮM</td>
            <td>Tábor SVJ Budějovická 2200 - 2201</td>
            <td>-</td>
            <td>přestavba STA vč. rozvodů, 50 bytů</td>
          </tr>
             
          <tr>
            <td>BYTOVÝ DŮM</td>
            <td>Jindřichův Hradec SVJ Otín 62</td>
            <td>-</td>
            <td>kompletní výstavba STA, 50 bytů</td>
          </tr>
             
          <tr>
            <td>BYTOVÝ DŮM</td>
            <td>Soběslav SVJ Komenského 1/2</td>
            <td>-</td>
            <td>kompletní výstavba a modernizace STA, 26 bytů</td>
          </tr>
             
          <tr>
            <td>DRUSTEVNÍ DŮM</td>
            <td>Tábor - Čekanice SVJ Sportovní 319</td>
            <td>-</td>
            <td>přestavba STA + SATELITNÍ systém, 12 bytů</td>
          </tr>
             
          <tr>
            <td>GRAND HOTEL</td>
            <td>Tábor nám. Fr. Křižíka 505/23</td>
            <td>-</td>
            <td>rekonstrukce a přestavba STA včetně rozvodů</td>
          </tr>
             
          <tr>
            <td>PENSION u RŮŽE</td>
            <td>Sezimovo Ústí Prokopa Holého 59/11</td>
            <td>-</td>
            <td>rekonstrukce a modernizace STA</td>
          </tr>
             
          <tr>
            <td>BYTOVÝ DŮM</td>
            <td>Tábor - Čekanice Družstevní 223</td>
            <td>-</td>
            <td>přestavba zesilovače v STA vč. rozvodů</td>
          </tr>
             
          <tr>
            <td>PENSION LUIS</td>
            <td>Alenina Lhota 2</td>
            <td>-</td>
            <td>úprava a modernizace antény vč. zesilovače v STA</td>
          </tr>
             
          <tr>
            <td>RODINNÝ STATEK PENSION</td>
            <td>Pacov - Pošná 20</td>
            <td>-</td>
            <td>kompletní výstavba AHD kam. systému a antény</td>
          </tr>
             
          <tr>
            <td>PENSION POD KOSTELEM</td>
            <td>Týn nad Vltavou 224</td>
            <td>-</td>
            <td>instalace zesilovače v STA vč. rozvodů</td>
          </tr>
             
          <tr>
            <td>BYTOVÝ DŮM SVJ</td>
            <td>Jindřichův Hradec Otín 26</td>
            <td>-</td>
            <td>rekonstrukce STA vč. rozvodů, 32 bytů</td>
          </tr>
             
          <tr>
            <td>RODINNÝ DŮM</td>
            <td>Malšice Příběnická 23</td>
            <td>-</td>
            <td>kompletní výstavba ant. a 8 IP kam.systému vč. rozvodů</td>
          </tr>
             
          <tr>
            <td>DISCOCENTRUM APOLLO</td>
            <td>Sezimovo Ústí 1 Táborská 45</td>
            <td>-</td>
            <td>přestavba AHD kamerového systému</td>
          </tr>
             
          <tr>
            <td>  PANELOVÝ DŮM SVJ</td>
            <td>Tábor Helsinská 2736- 37</td>
            <td>-</td>
            <td>kompletní přestavba a modernizace STA vč. antén</td>
          </tr>
             
          <tr>
            <td>RODINNÝ DŮM</td>
            <td>Sudoměřice u Tábora 97</td>
            <td>-</td>
            <td>kompletní výstavba 4 IP kam.systému, antény vč. rozvodů</td>
          </tr>
             
          <tr>
            <td>BYTOVÝ DŮM</td>
            <td>Soběslav Rašínova 210/15</td>
            <td>-</td>
            <td>modernizace nové STA dvb t2 vč. rozvodů, 50 bytů</td>
          </tr>
             
          <tr>
            <td>BYTOVÝ DŮM SVJ</td>
            <td>Tábor Tyršova 1004</td>
            <td>-</td>
            <td>rekonstrukce zesilovače v STA vč rozvodů a antény. 8 bytů</td>
          </tr>
             
          <tr>
            <td>BYTOVÝ DŮM SVJ</td>
            <td>Tábor Smolínova 2655</td>
            <td>-</td>
            <td>demontáž a celková výstavba a modernizace STA</td>
          </tr>
             
          <tr>
            <td>PEČOVATELSKÝ DŮM</td>
            <td>Tábor - Čekanice Pionýrů 242</td>
            <td>-</td>
            <td>měření DVB T2 signálu a ladění zařízení Tv</td>
          </tr>
             
          <tr>
            <td>BYTOVÝ DŮM</td>
            <td>CAFÉ LA TORTA Tábor Husovo nám. 627</td>
            <td>-</td>
            <td>přestavba STA a modernizace DVB-T2</td>
          </tr>
             
          <tr>
            <td>PIVNICE</td>
            <td>ZEMĚ ZASLÍBENÁ Tábor Husovo nám. 536</td>
            <td>-</td>
            <td>kompletní instalace antény vč. rozvodů</td>
          </tr>
             
          <tr>
            <td>BYTOVÝ DŮM SVJ</td>
            <td>Tábor Čekanice Fibichova 357</td>
            <td>-</td>
            <td>rekonstrukce a modernizace na DVB T2 STA</td>
          </tr>
             
          <tr>
            <td>BYTOVÝ DŮM SVJ</td>
            <td>Tábor - Čekanice Janáčkova 3086</td>
            <td>-</td>
            <td>oprava tv antény vč.přestavby STA. 36 bytů</td>
          </tr>
                 
          <tr>
            <td>3x ŘADOVÝ BYTOVÝ DŮM</td>
            <td>Tábor Nedbalova 2142 - 2143 - 2144</td>
            <td>-</td>
            <td>
              kompletní přestavba centrální STA a satelítního systému dvou
              družic ASTRA vč. rozvodů a přídání LTE fitrů
            </td>
          </tr>
             
          <tr>
            <td>AREÁL 5x BYTOVÝCH DOMŮ</td>
            <td>
              MAREDŮV VRCH Tábor Maredova 3002 - 3004 - 3008 <br /> / Nad řekou
              3005 / U Trati 3102
            </td>
            <td>-</td>
            <td>
              všechny bytové domy mají od nás kompletní přestavbu a modernizaci
              STA vč. nových antén a rozvodů pro příjem DVB T2 - DVB S2 signálu
            </td>
          </tr>
        </tbody>
      </Table>
    </>
  );
};
export default ReferenceTable;
