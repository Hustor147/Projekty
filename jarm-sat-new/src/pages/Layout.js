import { Outlet } from "react-router";
// import Footer from "../components/Footer";

import Navi from "../components/Navi";
// import BackOnTop from "../components/BackOnTop";
import { Container } from "reactstrap";
import Cards from "../components/Cards";
import Sky from "../components/Sky";
import Footer from "../components/Footer";

const Layout = () => {
  return (
    <>
      <div className="fullBackground">
        <Navi />
      </div>

      <Sky />
      <Outlet />
      {/* <BackOnTop />*/}
      <div className="fullBackground">
        <Footer />
      </div>
    </>
  );
};

export default Layout;
