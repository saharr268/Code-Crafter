import React from 'react'
import { FaBookOpenReader } from "react-icons/fa6";
import { HiArchiveBoxArrowDown } from "react-icons/hi2";
import { TbMessageChatbotFilled } from "react-icons/tb";
import { MdQuiz } from "react-icons/md";
import { GoArrowUpRight } from "react-icons/go";

const services = [
  {
    icon: <TbMessageChatbotFilled className="w-12 h-12" />,
    title: "چت‌بات مجهز به تکنولوژی هوش مصنوعی",
    description:
      "معرفی بهترین منابع موجود در دنیای تکنولوژی جهت بالا بردن سطح امنیت شما.",
  },
  {
    icon: <HiArchiveBoxArrowDown className="w-12 h-12" />,
    title: "منابع قابل اطمینان برای استفاده ایمن",
    description:
      "معرفی بهترین منابع موجود در دنیای تکنولوژی جهت بالا بردن سطح امنیت شما.",
  },
  {
    icon: <MdQuiz className="w-12 h-12" />,
    title: "کوئیزهای مرتبط با مطالب و تست‌های کمکی",
    description:
      "سوالات جذاب و آموزنده، جهت محک زدن یادگیری و سطح اطلاعات.",
  },
  {
    icon: <FaBookOpenReader className="w-12 h-12" />,
    title: "آموزش مطالب صحیح و کاربردی",
    description:
      "مجموعه‌ی جامع و مفید از ضروری‌ترین مطالب امنیت در فضای دیجیتال و تکنولوژی.",
  },
];

const CardSection = () => {
  return (
    
    <section className="bg-[#F5F5F5] rounded-[60px] w-full py-24">
      <div className=" mx-auto px-4 sm:px-6 lg:px-8">
          {/* Title */}
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
        صدا چگونه به شما کمک می‌کند؟
      </h2>

      {/* Card Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="group bg-white rounded-2xl shadow p-6 relative transition-all duration-300 hover:bg-teal-500 hover:shadow-lg"
          >
           {/* Header: Arrow (left) and Icon (right) */}
              <div className="flex items-center justify-between mb-4">
              {/* Arrow on the left */}
              <span className="text-gray-400 mt-2 group-hover:text-white bg-[#FBFBFB] group-hover:bg-white/20 rounded-full w-12 h-12 flex items-center justify-center transition-all duration-300">
              <GoArrowUpRight className="text-lg" />
              </span>

          {/* Icon on the right */}
              <div className="w-12 h-12 mt-2 pr-2 flex items-center justify-center rounded-full text-teal-500 text-xl ml-6 group-hover:text-white transition-all duration-300">
              {service.icon}
              </div>
          </div>


            {/* Text content */}
            <h3 className="font-bold text-lg mt-8 mb-4 text-right pr-2 text-gray-900 group-hover:text-white transition-all duration-300">
              {service.title}
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed text-right mb-4 pr-2 group-hover:text-white transition-all duration-300">
              {service.description}
            </p>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
};


export default CardSection;


