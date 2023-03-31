import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Kontakt from "./pages/Kontakt";
import Nabizime from "./pages/Nabizime";
import Reference from "./pages/Reference";
import Error from "./pages/Error";
import Layout from "./pages/Layout";
import NasePrace from "./pages/NasePrace";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path="Kontakt" element={<Kontakt />}></Route>
          <Route path="Nabizime" element={<Nabizime />}></Route>
          <Route path="NasePrace" element={<NasePrace />}></Route>
          <Route path="Reference" element={<Reference />}></Route>
          <Route path="*" element={<Error />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
