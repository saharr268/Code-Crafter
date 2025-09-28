import React from "react";
import Footer from "../components/common/Footer";
import HeroSection from "../components/sections/HeroSection";
import HeroBanner from "../components/sections/HeroBanner";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <HeroBanner/>
      <Footer/>
    </div>
  );
};

export default Home;
