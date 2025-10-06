import React from "react";
import MobileBanner from "../components/home/MobileBanner";
import PopularTopics from "../components/home/PopularTopics";
import Footer from "../components/common/Footer";
import AboutSection from "../components/home/AboutSection";
import BannerSection from "../components/home/BannerSection";
import CardSection from "../components/home/CardSection";
import MostViewedSection from "../components/home/MostViewedSection";
import HeroSection from "../components/home/HeroSection";
import HeroBanner from "../components/home/HeroBanner";

const Home = () => {
  return (
    <div>
      <MobileBanner/>
       <PopularTopics />
      <HeroSection />
      <HeroBanner />
      <AboutSection />
      <CardSection />
      <BannerSection />
      <MobileBanner />
      <PopularTopics />
      <MostViewedSection />
      <Footer />
    </div>
  );
};
export default Home;

