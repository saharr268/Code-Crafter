// src/components/QuizAnswers.jsx
import React from "react";
import { GoArrowLeft } from "react-icons/go";
import { useLocation, useNavigate } from "react-router-dom";
import Footer from "../../components/common/Footer";
import logo from "../../assets/images/logo-s.png";

const QuizAnswers = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { answers } = location.state || { answers: [] };
  return (
    <div>
      {" "}
      <header
        dir="rtl"
        className="bg-black text-white p-6 flex items-center justify-between"
      >
        <div className="flex items-center">
          <button
            onClick={() => navigate(-1)}
            className="absolute left-4 xl:left-12 w-12 h-12 flex items-center justify-center rounded-full bg-gray-900 text-background-card hover:bg-gray-800 transition disabled:opacity-40 shadow"
          >
            <GoArrowLeft size={24} />
          </button>

          <img src={logo} alt="لوگو" className="h-10 object-contain" />
        </div>
      </header>
      <div className="w-full min-h-screen bg-white font-vazir text-right py-20">
        {/* Main container */}
        <div className="max-w-full mx-auto px-[160px] py-4">
          <h1 className="text-4xl font-bold mb-6 mr-[-70px]">
            تمرینات و کوئیزها
          </h1>

          {answers.length === 0 ? (
            <p className="text-center text-gray-500">هیچ پاسخی وجود ندارد 😅</p>
          ) : (
            answers.map(
              ({ questionText, selected, correctAnswer, isCorrect }, index) => (
                <div
                  key={index}
                  className={`py-8 ${
                    index === answers.length - 1
                      ? ""
                      : "border-b border-solid border-[#CCCCCC]"
                  }`}
                >
                  {/* Question section */}
                  <div className="flex flex-row-reverse items-start gap-[26px]">
                    {/* Number badge */}
                    <div className="bg-blue-50 text-blue-700 rounded px-4 py-2 text-sm font-bold shadow-sm">
                      {index + 1}
                    </div>

                    {/* Question text */}
                    <p className="text-sm md:text-base leading-relaxed flex-1 text-right text-gray-700">
                      {questionText}
                    </p>
                  </div>

                  <div className="mt-3 flex flex-wrap gap-3 justify-start md:justify-end pr-[56px]">
                    {isCorrect ? (
                      <span className="px-3 py-1 rounded text-sm font-medium bg-green-100 text-green-700">
                        {selected}
                      </span>
                    ) : (
                      <>
                        <span
                          className={`px-4 py-2 rounded text-sm font-semibold ${
                            selected === null
                              ? "bg-gray-200 text-gray-800"
                              : "bg-[#FEE8E5] text-[#FE0000] "
                          } `}
                        >
                          {selected === null ? "پاسخ داده نشده" : selected}
                        </span>
                        <span className="px-4 py-2 rounded text-sm font-semibold bg-green-100 text-[#23C552]">
                          {correctAnswer}
                        </span>
                      </>
                    )}
                  </div>
                </div>
              )
            )
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default QuizAnswers;
