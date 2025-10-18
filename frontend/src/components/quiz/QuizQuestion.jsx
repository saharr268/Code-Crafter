import React, { useState } from "react";
import { GoArrowLeft} from "react-icons/go";
import { useNavigate } from "react-router-dom";



const questions = [
  {
    id: 1,
    question: "شما ایمیلی دریافت می‌کنید که می‌گوید: «حساب شما قفل خواهد شد! برای تایید ورود اینجا کلیک کنید.» این چه نوع حمله‌ای است؟",
    options: [
      "فیشینگ و سوءاستفاده‌ی مالی",
      "هک سیستم و سرقت اطلاعات",
      "آلوده شدن سیستم به ویروس",
      "حمله به حریم خصوصی"
    ],
    answer: "فیشینگ و سوءاستفاده‌ی مالی"
  },
  {
    id: 2,
    question: "کدام یک از موارد زیر بهترین رمز عبور محسوب می‌شود؟",
    options: [
      "123456",
      "password",
      "MyP@ssw0rd!2024",
      "admin"
    ],
    answer: "MyP@ssw0rd!2024"
  },
  {
    id: 3,
    question: "دو مرحله‌ای (2FA) چیست؟",
    options: [
      "استفاده از دو رمز عبور مختلف",
      "تایید هویت با دو روش مختلف",
      "ورود دو بار به سیستم",
      "استفاده از دو حساب کاربری"
    ],
    answer: "تایید هویت با دو روش مختلف"
  },
  {
    id: 4,
    question: "کدام یک از موارد زیر نشانه‌ای از حمله فیشینگ است؟",
    options: [
      "درخواست اطلاعات شخصی از طریق ایمیل",
      "لینک مشکوک در ایمیل",
      "ایمیل با املای غلط و گرامر ضعیف",
      "همه موارد بالا"
    ],
    answer: "همه موارد بالا"
  },
  {
    id: 5,
    question: "VPN چه کاری انجام می‌دهد؟",
    options: [
      "سرعت اینترنت را افزایش می‌دهد",
      "اتصال امن و خصوصی ایجاد می‌کند",
      "ویروس‌ها را حذف می‌کند",
      "فایل‌ها را فشرده می‌کند"
    ],
    answer: "اتصال امن و خصوصی ایجاد می‌کند"
  },
  {
    id: 6,
    question: "کدام یک از موارد زیر بهترین روش برای محافظت از اطلاعات شخصی است؟",
    options: [
      "اشتراک‌گذاری رمز عبور با دوستان",
      "استفاده از رمز عبور یکسان برای همه حساب‌ها",
      "فعال‌سازی احراز هویت دو مرحله‌ای",
      "ذخیره اطلاعات در مرورگر"
    ],
    answer: "فعال‌سازی احراز هویت دو مرحله‌ای"
  },
  {
    id: 7,
    question: "آپدیت‌های امنیتی سیستم عامل چرا مهم هستند؟",
    options: [
      "فقط برای بهبود عملکرد",
      "برای رفع آسیب‌پذیری‌های امنیتی",
      "برای تغییر ظاهر سیستم",
      "برای افزایش سرعت"
    ],
    answer: "برای رفع آسیب‌پذیری‌های امنیتی"
  },
  {
    id: 8,
    question: "کدام یک از موارد زیر نشانه‌ای از وجود بدافزار است؟",
    options: [
      "کند شدن سیستم",
      "نمایش تبلیغات ناخواسته",
      "مصرف غیرعادی اینترنت",
      "همه موارد بالا"
    ],
    answer: "همه موارد بالا"
  },
  {
    id: 9,
    question: "HTTPS در آدرس وب‌سایت نشان‌دهنده چیست؟",
    options: [
      "سرعت بالای وب‌سایت",
      "اتصال امن و رمزگذاری شده",
      "طراحی زیبای وب‌سایت",
      "قابلیت دسترسی آسان"
    ],
    answer: "اتصال امن و رمزگذاری شده"
  },
  {
    id: 10,
    question: "کدام یک از موارد زیر بهترین روش برای محافظت از حریم خصوصی در شبکه‌های اجتماعی است؟",
    options: [
      "اشتراک‌گذاری همه اطلاعات شخصی",
      "تنظیم حریم خصوصی به صورت عمومی",
      "تنظیم حریم خصوصی و محدود کردن دسترسی",
      "عدم استفاده از تنظیمات حریم خصوصی"
    ],
    answer: "تنظیم حریم خصوصی و محدود کردن دسترسی"
  },
  {
    id: 11,
    question: "بک‌آپ (پشتیبان‌گیری) اطلاعات چرا مهم است؟",
    options: [
      "برای آزاد کردن فضای ذخیره‌سازی",
      "برای محافظت از اطلاعات در برابر از دست رفتن",
      "برای افزایش سرعت سیستم",
      "برای کاهش مصرف برق"
    ],
    answer: "برای محافظت از اطلاعات در برابر از دست رفتن"
  },
  {
    id: 12,
    question: "کدام یک از موارد زیر نشانه‌ای از ایمیل جعلی است؟",
    options: [
      "آدرس فرستنده مشکوک",
      "درخواست اطلاعات حساس",
      "لینک‌های مشکوک",
      "همه موارد بالا"
    ],
    answer: "همه موارد بالا"
  },
  {
    id: 13,
    question: "فایروال (Firewall) چه کاری انجام می‌دهد؟",
    options: [
      "ویروس‌ها را حذف می‌کند",
      "ترافیک شبکه را کنترل و فیلتر می‌کند",
      "سرعت اینترنت را افزایش می‌دهد",
      "فایل‌ها را فشرده می‌کند"
    ],
    answer: "ترافیک شبکه را کنترل و فیلتر می‌کند"
  },
  {
    id: 14,
    question: "کدام یک از موارد زیر بهترین روش برای محافظت از اطلاعات در تلفن همراه است؟",
    options: [
      "عدم استفاده از قفل صفحه",
      "نصب برنامه‌های ناشناس",
      "فعال‌سازی قفل صفحه و رمز عبور",
      "اشتراک‌گذاری اطلاعات با همه"
    ],
    answer: "فعال‌سازی قفل صفحه و رمز عبور"
  },
  {
    id: 15,
    question: "کدام یک از موارد زیر نشانه‌ای از اتصال امن وای‌فای است؟",
    options: [
      "عدم وجود رمز عبور",
      "استفاده از رمزگذاری WPA3",
      "نام شبکه عمومی",
      "عدم محدودیت دسترسی"
    ],
    answer: "استفاده از رمزگذاری WPA3"
  }
];

const QuizQuestion = () => {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState(null);
  const navigate = useNavigate();

  const handleNext = () => {
    if (selected === questions[current].answer) {
      setScore(score + 1);
    }

    if (current < questions.length - 1) {
      setCurrent(current + 1);
      setSelected(null);
    } else {
      navigate("/quiz/result", { state: { score, total: questions.length } });
    }
  };

  const handleBack = () => {
    if (current > 0) setCurrent(current - 1);
  };

  const progress = ((current + 1) / questions.length) * 100;

  return (
    <div className="min-h-screen flex flex-col justify-between">
      {/* Header Section */}
     <header dir="rtl" className="bg-black text-white p-6 flex items-center justify-between">
       <div className="flex items-center">
        <button
          onClick={() => navigate(-1)}
          className="absolute left-4 xl:left-12 w-12 h-12 flex items-center justify-center rounded-full bg-gray-900 text-background-card hover:bg-gray-800 transition disabled:opacity-40 shadow"
          >
          <GoArrowLeft size={24} />
          </button>

         <img
          src="logo.png"
          alt="لوگو"
          className="h-10 object-contain" />
       </div> 
       </header>
     
            {/* Progress */}
        <div className="m-4 ml-12 w-40">
          <p className="text-sm mb-2 text-right">
            سوال {current + 1} از {questions.length}
          </p>
          <div className="w-40 bg-gray-200 rounded-full h-2.5">
            <div
              className="bg-purple-500 h-2.5 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

      <main className="max-w-7xl px-12 py-8">

        {/* Question */}
        <h2 dir="rtl" className="text-lg font-semibold text-gray-700 mb-12">
          {questions[current].question}
        </h2>

        {/* Options */}
        <div dir="rtl" className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
          {questions[current].options.map((opt) => (
            <button
              key={opt}
              onClick={() => setSelected(opt)}
              className={`py-4 px-6 rounded-xl border transition-colors text-center text-sm ${
                selected === opt
                  ? "border-purple-500 text-purple-600 bg-purple-50"
                  : "bg-gray-100 hover:bg-gray-200 text-gray-700"
              }`}
            >
              {opt}
            </button>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex justify-center gap-4">
          <button
            onClick={handleBack}
            disabled={current === 0}
            className="border border-gray-400 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-100 disabled:opacity-50"
          >
            بازگشت
          </button>

          <button
            onClick={handleNext}
            className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg"
          >
            {current === questions.length - 1 ? "مشاهده نتیجه" : "سوال بعد"}
          </button>
        </div>
      </main>

      <footer className="bg-black text-white text-center py-6 mt-8">
        <div className="flex justify-center gap-6 mt-6 mb-6 text-sm">
          <a className="hover:text-teal-500" href="#">خانه</a>
          <a className="hover:text-teal-500" href="#">پشتیبانی</a>
        </div>
        <p className="text-xs mb-6">© 2025 Code Crafter, All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default QuizQuestion;
