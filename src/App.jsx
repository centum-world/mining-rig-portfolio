import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Heropage from "./pages/Heropage";
import Header from "./common/Header";
import Footer from "./common/Footer";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Faq from "./pages/Faq";

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <div className="flex-1 flex ">
          <div className="flex-1">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route index element={<Heropage />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/faq" element={<Faq />} />
            </Routes>
          </div>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
