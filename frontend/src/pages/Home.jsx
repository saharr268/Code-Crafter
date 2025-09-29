import AboutSection from "../components/home/AboutSection";
import BannerSection from "../components/home/BannerSection";
import CardSection from "../components/home/CardSection";
import CommentsSection from "../components/home/CommentsSection";
import MostViewedSection from "../components/home/MostViewedSection";

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
