"use client";

import AboutUsHistory from "@/components/about-us/AboutUsHistory";
import AboutUsHero from "@/components/about-us/AboutUsHero";
import NavBar from "@/components/global/NavBar";
import AboutUsCollections from "@/components/about-us/AboutUsCollections";
import AboutUsAchievements from "@/components/about-us/AboutUsAchievements";
import AboutUsAwards from "@/components/about-us/AboutUsAwards";
import Footer from "@/components/global/Footer";

const AboutUs = () => {
  return (
    <>
      <NavBar defaultBlack={true} />
      <AboutUsHero />
      <AboutUsHistory />
      <AboutUsCollections />
      <AboutUsAchievements />
      <AboutUsAwards />
      <Footer />
    </>
  );
};

export default AboutUs;
