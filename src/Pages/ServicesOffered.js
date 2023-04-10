import { Divider } from "@mui/material";
import React from "react";
import Hero from "../containers/Hero";
import Services from "../containers/Service";
import WhyChooseUs from "../containers/WhyChooseUs";
import Footer from "../containers/Footer";
import { Component } from "react";

import Header4 from "../containers/Header4";

const WhatweOffer = () => {
  return (
    <div>
      <Header4 />
      <Divider />

      <Services py={10} />
      <Divider />
      <Footer />
    </div>
  );
};





export default WhatweOffer;
