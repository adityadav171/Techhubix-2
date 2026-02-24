import React from "react";
import HeroSection from "../Components/Banner/Banner";
import StatsArea from "../Components/Stats/Stats";
import AboutSection from "../Components/TwoColumn/Index";
import Services from "../Components/services/services";
import FAQ from "../Components/FAQ/Faq";
import CTASection from "../Components/BottomPane";

const Home = () => {
  return (
    <>
      <HeroSection />
      {/* <StatsArea /> */}
      <AboutSection />
      <Services />
      <FAQ />
      <CTASection />
    </>
  );
};

export default Home;
