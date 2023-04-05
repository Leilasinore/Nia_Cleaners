import React from "react";
import Footer from "../containers/Footer";
import Contactus from "../containers/Contactus";
import { Divider } from "@mui/material";
import Header4 from "../containers/Header4";

const ContactUs = () => {
  return (
    <div>
      <Header4 />
      <ContactUs/>
      <Divider />
      <Footer />
    </div>
  );
};

export default ContactUs;
