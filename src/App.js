import { Route, Routes } from "react-router-dom";
import "./index.scss";
import ServicePage from "./pages/ServicePage";
import SingleProduct from "./pages/SingleProduct";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<HomePage />}></Route>
        <Route exact path="/Services" element={<ServicePage />}></Route>
        <Route exact path="/SingleProduct" element={<SingleProduct/>}></Route>
      </Routes>
    </>
  );
}

export default App;
