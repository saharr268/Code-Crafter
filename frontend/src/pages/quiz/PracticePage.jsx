import React from "react";

import Navbar from "../../components/common/Navbar";
import Footer from "../../components/common/Footer";
import { useQuizData } from "../../services/hooks/quizzes";
import { PAGE_SIZE } from "../../helpers/constant/statics";
import { Link, useNavigate } from "react-router-dom";
import { urlImageHandler } from "../../helpers/utils/images";
import { map } from "lodash";
import { CustomShimmer } from "../../components/controllers/CustomShimmer";
import { questionICON, timeICON } from "../../components/others/SvgComponent";
import { AnimationSlideIn } from "../../components/common/Animations";

const PracticePage = () => {
  const navigate = useNavigate();
  const { data: getLessonData, isPending } = useQuizData(
    1,
    PAGE_SIZE,
    undefined
  );

  const data = getLessonData?.data;

  return (
    <div className="overflow-hidden">
      <section className="bg-white min-h-screen">
        {/* Navbar */}
        <div className="fixed top-6 px-6 w-full z-50 ">
          <Navbar />
        </div>

        {/* Title & description */}
        <AnimationSlideIn direction="left">
          <div className="text-right mt-32 px-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              تمرینات و کوییزها
            </h2>
            <p className="text-gray-600">
              این سوالات سطح دانش شما را ارزیابی می‌کنند. برای هر مطلب به‌طور
              جداگانه می‌توانید تمرینات و کوییز را انجام دهید.
            </p>
          </div>
        </AnimationSlideIn>

        {/* Grid cards */}
        <AnimationSlideIn direction="left">
          <div className="flex flex-wrap justify-between px-[10px] md:px-[134px] gap-y-7 mt-11">
            {!isPending
              ? data &&
                data?.map(
                  ({ title, question_count, thumbnail_url, id }, index) => (
                    <div
                      key={index}
                      style={{
                        boxShadow: "0px 0px 4px 0px rgba(0, 0, 0, 0.25)",
                      }}
                      className="relative bg-gray-100 w-[400px] p-6  rounded-3xl shadow hover:shadow-lg transition flex flex-col justify-between"
                    >
                      <div className="flex flex-col gap-y-5">
                        <h3 className="font-semibold text-lg text-gray-800 mb-4 text-right pt-6 pr-6">
                          {title}
                        </h3>

                        {/* Info (time & questions) */}
                        <div className="flex gap-4 text-sm justify-end mr-6 text-gray-500 mb-8">
                          <div className="bg-white rounded-md px-4 py-2 flex items-center gap-1">
                            <span className="flex items-center gap-1 mt-[-5px] rou text-[#2A2D2D] font-medium">
                              {`نامحدود`}
                            </span>
                            {timeICON()}
                          </div>
                          <div className="bg-white rounded-md px-4 py-2 flex items-center gap-1">
                            <span className="flex items-center gap-1 mt-[-5px] rou text-[#2A2D2D] font-medium">
                              {`${question_count} سوال `}
                            </span>
                            {questionICON()}
                          </div>
                        </div>
                      </div>

                      <div className="flex justify-between items-end">
                        <div className="">
                          <button
                            onClick={() => navigate(`quiz/${id}`)}
                            className="bg-[#03C0C1] hover:bg-purple-600 transition text-white text-lg  px-5 py-3 rounded-xl"
                          >
                            <Link>شروع کن</Link>
                          </button>
                        </div>

                        <img
                          src={urlImageHandler(thumbnail_url)}
                          alt="decoration"
                          className="right-5 w-[180px] h-[180px] pointer-events-none select-none flex justify-start"
                        />
                      </div>
                    </div>
                  )
                )
              : map([1, 2, 3], () => (
                  <CustomShimmer className={"w-[400px] h-[400px]"} />
                ))}
          </div>
        </AnimationSlideIn>

        {/* Footer */}
        <div className="mt-20">
          <Footer />
        </div>
      </section>
    </div>
  );
};

export default PracticePage;
