import React from "react";
import { useNavigate } from "react-router-dom";
import aboutImage from "../../assets/images/about.gif";

export default function AboutUs() {
const navigate = useNavigate();
  return (
    <section className="flex flex-col md:flex-row-reverse items-center justify-between px-12 md:px-20 py-12 bg-white">
      <div dir="rtl" className="px-10 md:w-1/2 text-right justify-end mr-16 md:mb-0">
        <h2 className="text-2xl md:text-3xl mb-4 text-text-heading">درباره‌ی ما</h2>
        <p className="text-text-body leading-6 mb-6">
          صدا (Seda) یک پلتفرم تازه تاسیس است که با هدف توانمندسازی زنان افغان
          در زمینه‌ی امنیت دیجیتال فعالیت می‌کند. در دنیای امروز که بخش بزرگی از
          ارتباطات، یادگیری و حتی فعالیت‌های اجتماعی در فضای مجازی شکل می‌گیرد،
          آگاهی از خطرات آنلاین و یادگیری مهارت‌های ایمنی در این فضا بسیار ضروری
          است. صدا به زنان کمک می‌کند تا بدانند چگونه در حریم خصوصی خود محافظت
          کنند، حساب‌های کاربری‌شان را ایمن‌تر سازند و در برابر تهدیدهایی مانند
          هک، آزار آنلاین یا انتشار اطلاعات شخصی مقاوم‌تر باشند.
        </p>
        <button onClick={()=> navigate("/learn")} className="bg-primary text-white px-6 py-4 mb-10 rounded-xl hover:bg-primary-dark">
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
