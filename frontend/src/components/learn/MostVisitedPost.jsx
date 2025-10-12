import React from "react";
import image from "../../assets/images/digital-safety.png";
import Navbar from "../common/Navbar";

const MostVisitedPost = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-6 ">
      <div className="w-full max-w-7xl ">
        <Navbar />
      </div>
      {/* Page Title */}
      <h2 className="text-right text-gray-800 font-medium text-lg md:text-xl mb-6 w-full max-w-7xl mt-32">
        پیشنهاد امروز صدا به شما
      </h2>

      {/* Card */}
      <div className="flex flex-col md:flex-row items-center justify-between bg-gray-100 rounded-3xl shadow-sm p-8 md:p-10 w-full max-w-6xl mx-auto">
        {/* Left Side: Image */}
        <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0">
          <img
            src={image}
            alt="امنیت دیجیتال"
            // className="w-64 md:w-82 lg:w-96 h-auto object-contain"
            className="w-[320px] md:w-[300px] lg:w-[300px] h-auto object-contain"
          />
        </div>

        {/* Right Side: Text */}
        <div className="w-full md:w-1/2 text-right md:pr-10">
          <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-6">
            اهمیت امنیت در دنیای دیجیتال
          </h3>
          <p className="text-gray-700 text-sm md:text-base leading-7 mb-16 line-clamp-3">
            اهمیت امنیت در دنیای دیجیتال در حفاظت از اطلاعات ارزشمند، حفظ حریم
            خصوصی افراد و سازمان‌ها، جلوگیری از سرقت هویت و خسارات مالی، حفظ
            اعتبار و اطمینان از عملکرد صحیح سیستم‌ها و شبکه‌ها نهفته است.
          </p>

          {/* Button */}
          <button className="bg-teal-500 hover:bg-teal-400 text-white font-medium px-4 py-2 rounded-md transition-colors duration-200">
            بیشتر بخوانید
          </button>
        </div>
      </div>
    </div>
  );
};

export default MostVisitedPost;
