import React from "react";
import MobileBanner from "../components/home/MobileBanner";
import PopularTopics from "../components/home/PopularTopics";
import Footer from "../components/common/Footer";
import AboutSection from "../components/home/AboutSection";
import CardSection from "../components/home/CardSection";
import Testimonials from "../components/home/Testimonials";
import HeroSection from "../components/home/HeroSection";
import HeroBanner from "../components/home/HeroBanner";



const Home = () => {
  return (
    <div className="overflow-hidden">
      <HeroSection />
      <HeroBanner />
      <AboutSection />
      <CardSection/>
      <Testimonials/>
      <MobileBanner />
      <PopularTopics />
      <Footer />
    </div>
  );
};

export default Home;
