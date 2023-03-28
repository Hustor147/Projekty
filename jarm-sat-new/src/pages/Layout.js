import { Outlet } from "react-router";
// import Footer from "../components/Footer";
import Header from "../components/Header";
import Navi from "../components/Navi";
// import BackOnTop from "../components/BackOnTop";
import { Container } from "reactstrap";
import Cards from "../components/Cards";
import Sky from "../components/Sky";

const Layout = () => {
  return (
    <>
      <div className="contentBox">
        <Navi />
      </div>
      <Sky />
      {/* <Header /> */}
      <div className="contentBox">
        <Cards />
      </div>

      <Outlet />
      {/* <BackOnTop />
      <Footer /> */}
    </>
  );
};

export default Layout;
