import AboutSection from "../components/sections/AboutSection";
import BannerSection from "../components/sections/BannerSection";
import CardSection from "../components/sections/CardSection";
import CommentsSection from "../components/sections/CommentsSection";
import MostViewedSection from "../components/sections/MostViewedSection";

const Home = () => {
  return (
    <div>
    <AboutSection />
      <CardSection />
      <CommentsSection />
      <BannerSection />
      <MostViewedSection/>
    </div>
  );
};

export default Home;
