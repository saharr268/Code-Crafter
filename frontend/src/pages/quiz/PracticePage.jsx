import React from "react";

import Navbar from "../../components/common/Navbar";
import Footer from "../../components/common/Footer";
import { useQuizData } from "../../services/hooks/quizzes";
import { PAGE_SIZE } from "../../helpers/constant/statics";
import { Link } from "react-router-dom";
import { urlImageHandler } from "../../helpers/utils/images";

const PracticePage = () => {
  const { data: getLessonData } = useQuizData(1, PAGE_SIZE, undefined);

  const data = getLessonData?.data;
  console.log("🚀 ~ PracticePage ~ data:", data);

  return (
    <div>
      <section className="bg-white min-h-screen">
        {/* Navbar */}
        <div className="fixed top-6 px-6 w-full z-50 ">
          <Navbar />
        </div>

        {/* Title & description */}
        <div className="text-right mt-32 px-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            تمرینات و کوییزها
          </h2>
          <p className="text-gray-600">
            این سوالات سطح دانش شما را ارزیابی می‌کنند. برای هر مطلب به‌طور
            جداگانه می‌توانید تمرینات و کوییز را انجام دهید.
          </p>
        </div>

        {/* Grid cards */}
        <div className="grid justify-center items-center gap-10 sm:grid-cols-2 lg:grid-cols-3 mt-20 w-[90%] mx-auto">
          {data?.map(
            ({ title, time, question_count, thumbnail_url, id }, index) => (
              <div
                key={index}
                className="relative bg-gray-100 w-[450px] h-[400px] rounded-3xl shadow hover:shadow-lg transition"
              >
                {/* Title */}
                <h3 className="font-semibold text-lg text-gray-800 mb-4 text-right pt-6 pr-6">
                  {title}
                </h3>

                {/* Info (time & questions) */}
                <div className="flex gap-4 text-sm justify-end mr-6 text-gray-500 mb-6">
                  <div className="bg-white px-4 py-2">
                    <span className="flex items-center gap-1 text-[#03C0C1]">
                      {time}
                      {/* <GiClockwork className="text-lg" /> */}
                    </span>
                  </div>
                  <div className="bg-white px-4 py-2">
                    <span className="flex items-center gap-1 text-[#03C0C1]">
                      {question_count}
                      {/* <MdQuestionAnswer className="text-lg" /> */}
                    </span>
                  </div>
                </div>

                {/* Button */}
                <div className="flex mt-60">
                  <button className="bg-[#03C0C1] hover:bg-teal-600 text-white ml-8 px-4 py-2 rounded-xl mb-auto">
                    <Link to={`quiz/${id}`}>شروع کن</Link>
                  </button>
                </div>

                {/* Background decoration */}
                <img
                  src={urlImageHandler(thumbnail_url)}
                  alt="decoration"
                  className="absolute bottom-1 right-5 w-70 h-60 opacity-60 pointer-events-none select-none"
                />
              </div>
            )
          )}
        </div>

        {/* Footer */}
        <div className="mt-20">
          <Footer />
        </div>
      </section>
    </div>
  );
};

export default PracticePage;
