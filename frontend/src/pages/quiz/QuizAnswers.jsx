// src/components/QuizAnswers.jsx
import React from "react";

const quizItems = [
  { feedback: ["فیشینگ و سواستفاده‌ی مالی"], types: ["green"] },
  {
    feedback: ["هک سیستم و سرقت اطلاعات", "فیشینگ و سواستفاده‌ی مالی"],
    types: ["red", "green"],
  },
  { feedback: ["فیشینگ و سواستفاده‌ی مالی"], types: ["green"] },
  { feedback: ["فیشینگ و سواستفاده‌ی مالی"], types: ["green"] },
  { feedback: ["فیشینگ و سواستفاده‌ی مالی"], types: ["green"] },
  { feedback: ["فیشینگ و سواستفاده‌ی مالی"], types: ["green"] },
  { feedback: ["فیشینگ و سواستفاده‌ی مالی"], types: ["green"] },
  { feedback: ["فیشینگ و سواستفاده‌ی مالی"], types: ["green"] },
  { feedback: ["فیشینگ و سواستفاده‌ی مالی"], types: ["green"] },
];

const QuizAnswers = () => {
  return (
    <div className="w-full min-h-screen bg-white font-vazir text-right">
      {/* Adjusted horizontal margin to match red square for title */}
      <div className="max-w-full mx-auto px-[160px] py-4">
        {/* Title aligned with red square */}
        {/* <h1 className="text-xl font-bold mb-6">تمرینات و کوئیزها</h1> */}
        <h1 className="text-xl font-bold mb-6 mr-[-70px]">تمرینات و کوئیزها</h1>

        {quizItems.map((item, index) => (
          <div
            key={index}
            className={`py-6 ${
              index === quizItems.length - 1 ? "" : "border-b"
            }`}
          >
            {/* Adjusted gap and padding to match red square and arrow */}
            <div className="flex flex-row-reverse items-start gap-[26px]">
              {/* Number badge aligned with red square */}
              <div className="bg-blue-50 text-blue-700 rounded px-4 py-2 text-sm font-bold shadow-sm ">
                {index + 1}
              </div>

              {/* Question text aligned with red arrow */}
              <p className="text-sm md:text-base leading-relaxed flex-1 text-right">
                شما ایمیلی دریافت می‌کنید که می‌گوید: «حساب شما قفل خواهد شد!
                برای تأیید ورود اینجا کلیک کنید.» پس از کلیک، رمز عبور خود را در
                یک سایت جعلی وارد می‌کنید. این چه نوع حمله‌ای است؟
              </p>
            </div>

            {/* Feedback pills aligned with paragraph */}
            {/* <div className="mt-3 flex flex-wrap gap-3 justify-start md:justify-end"> */}
            <div className="mt-3 flex flex-wrap gap-3 justify-start md:justify-end pr-[56px]">
              {item.feedback.map((text, i) => (
                <span
                  key={i}
                  className={`px-3 py-1 rounded text-sm font-medium ${
                    item.types[i] === "green"
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {text}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuizAnswers;
