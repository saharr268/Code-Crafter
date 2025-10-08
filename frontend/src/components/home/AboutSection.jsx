import React from "react";

export default function AboutUs() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-12 bg-white">
      {/* تصویر سمت چپ */}
      <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0">
        <img
          src="../../../public/images/about.png" // تصویرت را اینجا بگذار (پوشه public)
          alt="about illustration"
          className="max-w-sm md:max-w-md"
        />
      </div>

      {/* متن سمت راست */}
      <div className="w-full md:w-1/2 text-right">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">درباره‌ی ما</h2>
        <p className="text-gray-700 leading-8 mb-6">
          صدا (Seda) یک پلتفرم تازه تاسیس است که با هدف توانمندسازی زنان افغان
          در زمینه‌ی امنیت دیجیتال فعالیت می‌کند. در دنیای امروز که بخش بزرگی از
          ارتباطات، یادگیری و حتی فعالیت‌های اجتماعی در فضای مجازی شکل می‌گیرد،
          آگاهی از خطرات آنلاین و یادگیری مهارت‌های ایمنی در این فضا بسیار ضروری
          است. صدا به زنان کمک می‌کند تا بدانند چگونه در حریم خصوصی خود محافظت
          کنند، حساب‌های کاربری‌شان را ایمن‌تر سازند و در برابر تهدیدهایی مانند
          هک، آزار آنلاین یا انتشار اطلاعات شخصی مقاوم‌تر باشند.
        </p>
        <button className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-2 rounded-md">
          مشاهده‌ی مطالب
        </button>
      </div>
    </section>
  );
}
