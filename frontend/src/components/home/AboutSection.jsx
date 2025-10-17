import React from "react";
import aboutImage from "../../assets/images/about.png";

export default function AboutUs() {
  return (
    <section className="flex flex-col md:flex-row-reverse items-center justify-between px-6 md:px-20 py-6 bg-white">
      <div className="w-full md:w-1/2 text-right md:mb-0">
        <h2 className="text-2xl md:text-3xl font-bold p-3 text-text-heading">درباره‌ی ما</h2>
        <p className="text-text-body leading-8 mb-10">
          صدا (Seda) یک پلتفرم تازه تاسیس است که با هدف توانمندسازی زنان افغان
          در زمینه‌ی امنیت دیجیتال فعالیت می‌کند. در دنیای امروز که بخش بزرگی از
          ارتباطات، یادگیری و حتی فعالیت‌های اجتماعی در فضای مجازی شکل می‌گیرد،
          آگاهی از خطرات آنلاین و یادگیری مهارت‌های ایمنی در این فضا بسیار ضروری
          است. صدا به زنان کمک می‌کند تا بدانند چگونه در حریم خصوصی خود محافظت
          کنند، حساب‌های کاربری‌شان را ایمن‌تر سازند و در برابر تهدیدهایی مانند
          هک، آزار آنلاین یا انتشار اطلاعات شخصی مقاوم‌تر باشند.
        </p>
        <button className="bg-primary-dark text-white px-6 py-3 mb-10 rounded-md">
          مشاهده‌ی مطالب
        </button>
      </div>

      <div className="w-full md:w-1/2 flex justify-center">
        <img
          src={aboutImage}
          alt="about illustration"
          className="max-w-sm md:max-w-md"
        />
      </div>
    </section>
  );
}
