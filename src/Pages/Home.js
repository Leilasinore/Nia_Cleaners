import Header from "../containers/Header";
import Hero from "../containers/Hero";
import React from "react";
import { Box } from "@mui/material";
import { Container, Divider } from "@mui/material";
import Services from "../containers/Service";
import WhyChooseUs from "../containers/WhyChooseUs.js"
import Footer from "../containers/Footer";

const Home = () => {
  return (
    <>
      <Header />
      <Divider />

      <Hero />

      <Divider />
      <Services />
      <Divider />
      <WhyChooseUs />
      <Divider />
      <Footer />
    </>
  );
};

export default Home;
