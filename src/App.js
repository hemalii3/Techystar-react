import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Contact from "./components/contact";


import "./styles/colors.scss";
import "./styles/App.scss";
import "./styles/mediaquery.scss";
function App() {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/contact" element={<Contact />} />
      
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
