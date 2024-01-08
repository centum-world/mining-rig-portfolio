import React, { useState,useRef } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {animateScroll as scroll,Link as ScrollLink, Element } from "react-scroll";
import ArrowUpwardOutlinedIcon from '@mui/icons-material/ArrowUpwardOutlined';
import HomePage from "./pages/HomePage";
import Heropage from "./pages/Heropage";
import Header from "./common/Header";
import Footer from "./common/Footer";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Faq from "./pages/Faq";

const App = () => {
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const bottomRef = useRef(null);


  const handleScroll = () => {
    setIsHeaderVisible(window.scrollY < 10);
  };

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <Router>
      <div className="flex flex-col min-h-screen" onScroll={handleScroll}>
        <div>
          <Header isVisible={isHeaderVisible} />
        </div>
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route index element={<Heropage />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/faq" element={<Faq />} />
          </Routes>
        </div>
        <Footer />
        <ScrollLink
          to="top"
          smooth={true}
          duration={500}
          className={`fixed bottom-4 right-4 cursor-pointer ${isHeaderVisible ? "opacity-100" : "opacity-0"}`}
          onClick={scrollToTop}
        >
         <ArrowUpwardOutlinedIcon/>
        </ScrollLink>
        <Element name="top" className="d-none"></Element>
      </div>
      
    </Router>
  );
};

export default App;
