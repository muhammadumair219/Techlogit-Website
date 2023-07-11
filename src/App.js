import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import "./index.scss"
import Contact from "./utils/Contact/Contact";
import ServicePage from "./pages/ServicePage";



function App() {

  return (
<>
<Routes>
        <Route exact path="/" element={<Home/>}></Route>
        <Route exact path="/services" element={<ServicePage/>}></Route>
      </Routes>
</>
  );
}

export default App;
