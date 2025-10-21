import React, { useState } from "react";
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
import { ChatbotButton } from "../components/common/ChatbotButton";
import ChatWindow from "../components/common/ChatbotWindow";
import { AnimationSlideIn } from "../components/common/Animations";

const Home = () => {
  const [openChatbot, setOpenChatbot] = useState();

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
      <HeroSection openChatbot={openChatbot} setOpenChatbot={setOpenChatbot} />
      <HeroBanner />
      <AboutSection />
      <CardSection setOpenChatbot={setOpenChatbot} />
      <Testimonials data={commentData} isLoading={isPendingComment} />
      <MobileBanner />
      <PopularTopics data={lessonData} isLoading={isPendingLesson} />
      <Footer />
      <ChatbotButton
        onClick={() => {
          // e.stopPropagination();
          setOpenChatbot(true);
        }}
      />
      <ChatWindow isOpen={openChatbot} onClose={() => setOpenChatbot(false)} />
    </div>
  );
};

export default Home;
