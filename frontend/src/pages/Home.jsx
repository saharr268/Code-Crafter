import React from "react";

import ResourcesPage from "../components/ResourcesPage";
import MobileBanner from "../components/home/MobileBanner";
import PopularTopics from "../components/home/PopularTopics";
import Footer from "../components/common/Footer";
import AboutSection from "../components/home/AboutSection";
import BannerSection from "../components/home/BannerSection";
import Testimonials from "../components/home/Testimonials";
import CardSection from "../components/home/CardSection";
import HeroSection from "../components/home/HeroSection";
import HeroBanner from "../components/home/HeroBanner";
import MostVisitedPost from "../components/learn/MostVisitedPost";
import AllPosts from "../components/learn/AllPosts";


const Home = () => {
  return (
    <div>
      <HeroSection />
      <HeroBanner />
      <AboutSection />
      <CardSection />
      <Testimonials />
      <BannerSection />
      <MobileBanner />
      <PopularTopics />
      <ResourcesPage />
      <MostVisitedPost />
      <AllPosts/>
      <Footer />
    </div>
  );
};

export default Home;
