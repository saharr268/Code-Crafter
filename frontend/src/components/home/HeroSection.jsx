// src/components/HeroSection.jsx
import Navbar from "../common/Navbar";

export default function HeroSection() {
  return (
    <section className="bg-[#F5F5F5] m-6 rounded-3xl min-h-screen">
      <div className=" ">
        {/* 🔹 Navbar inside Hero */}
        <div className="mt-5 mb-10">
          <Navbar />
        </div>

        {/* 🔹 Hero Content */}
        <div className="flex justify-between m-0 px-16 py-16 grid-cols-1 md:grid-cols-2  ">
          {/* Left Image */}
          <div className=" mt-20 ">
            <img
              src="../.././../public/images/bro.png"
              alt="security illustration"
              className="max-w-full h-auto text-9xl"
            />
          </div>

          {/* Right Content */}
          <div className="text-right mt-40">
            <p className="mb-10 text-gray-500 text-xl font-semibold m-0">
              اولین حامی امنیت و آزادی زنان افغان در جهان تکنولوژی
            </p>
            <h1 className="text-3xl md:text-7xl font-bold leading-relaxed">
              با <span className="text-[#03C0C1]">صدای</span>، ما
              <br />! امنیت را جستجو کنید
            </h1>
            <button className="px-8 py-4 mt-20 bg-[#03C0C1] text-white rounded-xl shadow hover:text-[#03C0C1]">
              مشاهده‌ی مطالب
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
