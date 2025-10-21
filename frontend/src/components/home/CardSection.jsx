import React from "react";
import { FaBookOpenReader } from "react-icons/fa6";
import { HiArchiveBoxArrowDown } from "react-icons/hi2";
import { TbMessageChatbotFilled } from "react-icons/tb";
import { MdQuiz } from "react-icons/md";
import { GoArrowUpRight } from "react-icons/go";
import { useNavigate } from "react-router-dom";
import { AnimationSlideIn } from "../common/Animations";

const CardSection = ({ setOpenChatbot }) => {
  const navigate = useNavigate();
  const services = [
    {
      icon: <TbMessageChatbotFilled className="w-12 h-12" />,
      title: "چت‌بات مجهز به تکنولوژی هوش مصنوعی",
      description:
        "معرفی بهترین منابع موجود در دنیای تکنولوژی جهت بالا بردن سطح امنیت شما.",
      onClick: () => setOpenChatbot(true),
    },
    {
      icon: <HiArchiveBoxArrowDown className="w-12 h-12" />,
      title: "منابع قابل اطمینان برای استفاده ایمن",
      description:
        "معرفی بهترین منابع موجود در دنیای تکنولوژی جهت بالا بردن سطح امنیت شما.",
      onClick: () => navigate("/resources"),
    },
    {
      icon: <MdQuiz className="w-12 h-12" />,
      title: "کوئیزهای مرتبط با مطالب و تست‌های کمکی",
      description: "سوالات جذاب و آموزنده، جهت محک زدن یادگیری و سطح اطلاعات.",
      onClick: () => navigate("/practice"),
    },
    {
      icon: <FaBookOpenReader className="w-12 h-12" />,
      title: "آموزش مطالب صحیح و کاربردی",
      description:
        "مجموعه‌ی جامع و مفید از ضروری‌ترین مطالب امنیت در فضای دیجیتال و تکنولوژی.",
      onClick: () => navigate("/learn"),
    },
  ];
  return (
    <AnimationSlideIn direction="right">
      <section className="bg-background-card rounded-[60px] w-full py-24">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          {/* Title */}
          <h2 className="text-2xl md:text-3xl text-text-heading font-bold text-center mb-12">
            صدا چگونه به شما کمک می‌کند؟
          </h2>

          {/* Card Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => {
              const isPurple = index % 2 === 0;

              return (
                <div
                  key={index}
                  onClick={service.onClick}
                  className={`group bg-white rounded-2xl shadow p-6 relative transition-all duration-300 hover:shadow-lg 
                 ${isPurple ? "hover:bg-[#8c58d9]" : "hover:bg-primary-deep"}`}
                >
                  {/* Header: Arrow (left) and Icon (right) */}
                  <div className="flex items-center justify-between mb-4">
                    {/* Arrow on the left */}
                    <span
                      className={`mt-2 rounded-full w-12 h-12 flex items-center justify-center transition-all duration-300 
                      ${
                        isPurple
                          ? "text-[#8c58d9] bg-[#FBFBFB] group-hover:text-white group-hover:bg-white/20"
                          : "text-primary-deep bg-[#FBFBFB] group-hover:text-white group-hover:bg-white/20"
                      }`}
                    >
                      <GoArrowUpRight className="text-lg" />
                    </span>

                    {/* Icon on the right */}
                    <div
                      className={`w-12 h-12 mt-2 pr-2 flex items-center justify-center rounded-full text-xl ml-6 transition-all duration-300 
                      ${
                        isPurple
                          ? "text-[#8c58d9] group-hover:text-white"
                          : "text-primary-deep group-hover:text-white"
                      }`}
                    >
                      {service.icon}
                    </div>
                  </div>

                  {/* Text content */}
                  <h3 className="font-bold text-lg mt-8 mb-4 text-right pr-2 text-text-heading group-hover:text-white transition-all duration-300">
                    {service.title}
                  </h3>
                  <p className="text-text-body text-sm leading-relaxed text-right mb-4 pr-2 group-hover:text-white transition-all duration-300">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </AnimationSlideIn>
  );
};

export default CardSection;
