import { Outlet } from "react-router";
// import Footer from "../components/Footer";
import Header from "../components/Header";
import Navi from "../components/Navi";
// import BackOnTop from "../components/BackOnTop";

const Layout = () => {
  return (
    <>
      <Header />
      {/* <Navi /> */}
      <Outlet />
      {/* <BackOnTop />
      <Footer /> */}
    </>
  );
};

export default Layout;
