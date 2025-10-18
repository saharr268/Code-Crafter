import React from "react";
import { GoArrowLeft } from "react-icons/go";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useGetQuizAttemptByQuizId } from "../../services/hooks/quizzes";

const QuizResult = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { id: currentQuizId } = useParams();
  const { total } = location.state || { total: 0 };

  const { data: quizAttemptByQuiz } = useGetQuizAttemptByQuizId(currentQuizId);

  const quizResult = quizAttemptByQuiz?.data ?? {};
  console.log("🚀 ~ QuizResult ~ quizResult:", quizResult);

  return (
    <div className="flex flex-col min-h-screen bg-white">
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

          <img src="logo.png" alt="لوگو" className="h-10 object-contain" />
        </div>
      </header>

      <main className="w-full flex flex-col lg:flex-row items-center justify-between gap-32 px-[100px] mt-12">
        <img
          src="/src/assets/images/quiz.png"
          alt="Online Test Illustration"
          className="w-[500px]"
        />

        <div dir="rtl" className="flex flex-col gap-20">
          <div className="mb-4 flex flex-col gap-9">
            <p className="text-4xl font-bold text-purple-600">نتیجه‌ی کوییز</p>
            <p className="text-black text-lg">
              تعداد پاسخ صحیح به سوالات از مجموع {total} سوال
            </p>
          </div>

          <p className="text-6xl font-extrabold text-purple-700">
            {quizResult?.score}
          </p>

          <div className="flex gap-4">
            <button
              onClick={() => navigate(`/practice/answers/${currentQuizId}`)}
              className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg"
            >
              مشاهده‌ی جواب‌ها
            </button>
            <button
              onClick={() => navigate("/quiz")}
              className="bg-purple-100 hover:bg-purple-200 text-purple-700 px-12 py-3 text-lg rounded-lg"
            >
              تلاش دوباره
            </button>
          </div>
        </div>
      </main>

      {/* <footer className="bg-black text-white text-center py-6 mt-8">
        <div dir="rtl" className="flex justify-center gap-6 mt-6 mb-6 text-sm">
          <a className="hover:text-teal-500" href="#">
            خانه
          </a>
          <a className="hover:text-teal-500" href="#">
            پشتیبانی
          </a>
        </div>
        <p className="text-xs mb-6">
          © 2025 Code Crafter, All Rights Reserved.
        </p>
      </footer> */}
    </div>
  );
};

export default QuizResult;
