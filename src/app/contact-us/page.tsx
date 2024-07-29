"use client";

import ContactUsContent from "@/components/contact-us/ContactUsContent";
import ContactUsHero from "@/components/contact-us/ContactUsHero";
import Footer from "@/components/global/Footer";
import NavBar from "@/components/global/NavBar";
import UnderMaintenance from "@/components/global/UnderMaintenance";
import { Box } from "@mui/material";

const ContactUsPage = () => {
  return (
    <>
      <NavBar defaultBlack={true} />
      <ContactUsHero />
      <ContactUsContent />
      <Box display={"flex"} height={"100px"} />
      <Footer />
    </>
  );
};

export default ContactUsPage;
