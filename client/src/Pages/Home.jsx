import React from "react";
import HeroSection from "../Components/Banner/Banner";
import TrustStrip from "../Components/TrustStrip/TrustStrip";
import AboutSection from "../Components/TwoColumn/Index";
import CaseStudies from "../Components/CaseStudies/CaseStudies";
import Services from "../Components/services/services";
import Pricing from "../Components/Pricing/Pricing";
import FAQ from "../Components/FAQ/Faq";
import HighConvertingCTA from "../Components/HighConvertingCTA/HighConvertingCTA";

const Home = () => {
  return (
    <>
      <HeroSection />
      <TrustStrip />
      <AboutSection />
      <CaseStudies />
      <Services />
      <Pricing />
      <FAQ />
      <HighConvertingCTA />
    </>
  );
};

export default Home;
