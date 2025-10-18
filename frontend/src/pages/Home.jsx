import React from "react";
import MobileBanner from "../components/home/MobileBanner";
import PopularTopics from "../components/home/PopularTopics";
import Footer from "../components/common/Footer";
import AboutSection from "../components/home/AboutSection";
import CardSection from "../components/home/CardSection";
import Testimonials from "../components/home/Testimonials";
import HeroSection from "../components/home/HeroSection";
import HeroBanner from "../components/home/HeroBanner";
import { useLessonData } from "../services/hooks/lessons";
import { PAGE_SIZE } from "../helpers/constant/statics";

import { slice } from "lodash";
import { useCommentData } from "../services/hooks/comments";
import QuizList from "../components/home/Quizlist";

const Home = () => {
  const { data: lessonSearch, isPending: isPendingLesson } = useLessonData(
    1,
    PAGE_SIZE,
    undefined
  );

  const lessonData = slice(lessonSearch?.data, 0, 3);

  const { data: commentSearch, isPending: isPendingComment } = useCommentData(
    1,
    PAGE_SIZE,
    undefined
  );

  const commentData = commentSearch?.data ?? [];

  return (
    <div className="overflow-hidden">
      <HeroSection />
      <HeroBanner />
      <AboutSection />
      <CardSection />
      <Testimonials data={commentData} isLoading={isPendingComment} />
      <MobileBanner />
      <PopularTopics data={lessonData} isLoading={isPendingLesson} />
      <CommentsSection />
      <BannerSection />
      <MostViewedSection />
      <QuizList />
      <Footer />
    </div>
  );
};

export default Home;
