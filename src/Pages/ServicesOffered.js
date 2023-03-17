import { Divider } from "@mui/material";
import React from "react";
import Header from "../containers/Header";
import Hero from "../containers/Hero";
import Services from "../containers/Service";
import WhyChooseUs from "../containers/WhyChooseUs";
import Footer from "../containers/Footer";
import { Component } from "react";

const WhatweOffer = () => {
  return (
    <div>
      <Header />
      <Divider />

      <Services py={10} />
      <Divider />
      <Footer />
    </div>
  );
};





export default WhatweOffer;
