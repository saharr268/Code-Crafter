import React from "react";
import MobileBanner from "../components";
import PopularTopics from "../components/home/PopularTopics";
import Footer from "../components/common/Footer";
import AboutSection from "../components/home/AboutSection";
import BannerSection from "../components/home/BannerSection";
import CardSection from "../components/home/CardSection";
import HeroSection from "../components/home/HeroSection";
import HeroBanner from "../components/home/HeroBanner";

const Home = () => {
  return (
    <div>
      <AboutSection />
      <CardSection />
      <BannerSection />
      <MobileBanner />
      <PopularTopics />
      <Footer />
    </div>
  );
};
export default Home;

