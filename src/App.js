import React from "react";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Service from "./Pages/ServicesOffered";
import Pricing from "./Pages/Pricing";
import ContactUs from "./Pages/Contact Us";
import { Routes, Route, Switch } from "react-router-dom";
import Header from "./containers/Header";
import WhatweOffer from "./Pages/ServicesOffered";
const App = () => {
  return (
    <>
      <Routes>

          
          <Route path="about" element={<About />} />,
          <Route path="services" element={<WhatweOffer />} />,
          <Route path="pricing" element={<Pricing />} />,
          <Route path="contactus" element={<ContactUs />} />,
          <Route path="/" element={<Home />} />,
        
      </Routes>
    </>
  );
};

export default App;
