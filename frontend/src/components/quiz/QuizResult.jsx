import React from "react";
import { GoArrowLeft} from "react-icons/go";
import { useLocation, useNavigate } from "react-router-dom";

const QuizResult = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { score, total } = location.state || { score: 0, total: 0 };

  return (
    <div className="flex flex-col min-h-screen justify-between">
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

      <main className="max-w-5xl mx-auto flex flex-col lg:flex-row items-center justify-center gap-32 p-8">
        <img
          src="/src/assets/images/quiz.png"
          alt="Online Test Illustration"
          className="w-80"
        />

        <div dir="rtl" className="grid m-24">
          <h2 className="text-2xl font-bold text-purple-600 mb-4">
            نتیجه‌ی کوییز
          </h2>
          <p className="text-gray-700 mb-2">
            تعداد پاسخ صحیح به سوالات از مجموع {total} سوال
          </p>
          <p className="text-5xl font-extrabold text-purple-700 mb-6">
            {score}
          </p>

          <div className="flex justify-center gap-4">
            <button
              onClick={() => navigate("/quiz")}
              className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg"
            >
              تلاش دوباره
            </button>
            <button className="bg-purple-100 hover:bg-purple-200 text-purple-700 px-6 py-3 rounded-lg">
              مشاهده‌ی جواب‌ها
            </button>
          </div>
        </div>
      </main>

      <footer className="bg-black text-white text-center py-6 mt-8">
        <div dir="rtl" className="flex justify-center gap-6 mt-6 mb-6 text-sm">
          <a className="hover:text-teal-500" href="#">خانه</a>
          <a className="hover:text-teal-500" href="#">پشتیبانی</a>
        </div>
        <p className="text-xs mb-6">© 2025 Code Crafter, All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default QuizResult;
