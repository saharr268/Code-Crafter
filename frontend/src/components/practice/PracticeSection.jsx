import React from "react";
import Navbar from "../common/Navbar";

const quizzes = [
  {
    title: "اهمیت امنیت در دنیای دیجیتال",
    time: "20 دقیقه",
    questions: "10 سوال",
  },
  {
    title: "پسورد قوی و ایمن",
    time: "20 دقیقه",
    questions: "10 سوال",
  },
  {
    title: "حریم خصوصی در فضای مجازی",
    time: "20 دقیقه",
    questions: "10 سوال",
  },
  {
    title: "اجاز هویت دو مرحله‌ای",
    time: "20 دقیقه",
    questions: "10 سوال",
  },
  {
    title: "فیشینگ و سواستفاده‌ی مالی",
    time: "20 دقیقه",
    questions: "10 سوال",
  },
  {
    title: "وب‌گردی و بازدید با امنیت",
    time: "20 دقیقه",
    questions: "10 سوال",
  },
];

export default function Quizzes() {
  return (
      <section className="px-6 md:px-20 py-12 bg-white">
          {/* navbar */}
          <div>
              <Navbar/>
          </div>
      {/* Title & description */}
      <div className="text-right mt-10">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          تمرینات و کوییزها
        </h2>
        <p className="text-gray-600">
          این سوالات سطح دانش شما را ارزیابی می‌کنند. برای هر مطلب به‌طور
          جداگانه می‌توانید تمرینات و کوییز را انجام دهید.
        </p>
      </div>

      {/* Grid cards */}
      <div className=" grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 mt-20">
        {quizzes.map((quiz, index) => (
          <div
            key={index}
            className="relative bg-gray-100 w-[350px] h-[350px] rounded-xl shadow  justify-between hover:shadow-lg transition"
          >
            {/* Title */}
            <h3 className="font-semibold text-lg text-gray-800 mb-4">
              {quiz.title}
            </h3>

            {/* Info (time & questions) */}
            <div className="flex gap-4 text-sm justify-end mr-6 text-gray-500 mb-6">
              <span className="flex items-center gap-1">⏱ {quiz.time}</span>
              <span className="flex items-center gap-1">
                ❓ {quiz.questions}
              </span>
            </div>

            <button className=" bg-[#03C0C1] hover:bg-teal-600 text-white px-4 py-2 rounded-md">
              شروع کن
            </button>

            <img
              src="../../../public/images/practice.png" // عکس قفل و برگ رو اینجا بزار (public)
              alt="decoration"
              className="absolute bottom-2 right-2 w-60 opacity-60 pointer-events-none select-none"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
