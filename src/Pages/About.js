import React from "react";
import Header from "../containers/Header";
import Heroabout from "../containers/Heroabout";
import Mission from "../containers/Mission";
import { Divider } from "@mui/material";
import Footer from "../containers/Footer"

const About = () => {
  return (
    <>
      <Header />
      <Divider />
      <Heroabout />
      <Divider />
      <Mission />
      <Footer />
    </>
  );
};
export default About;
