// src/components/HeroSection.jsx
import Navbar from "../common/Navbar";

export default function HeroSection() {
  return (
    <section className="bg-gray-200 m-5 rounded-3xl min-h-screen">
      <div className=" ">
        {/* 🔹 Navbar inside Hero */}
        <div className="max-w-7xl mx-auto px-6 pt-6">
          <Navbar />
        </div>

        {/* 🔹 Hero Content */}
        <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left Image */}
          <div className="flex justify-center">
            <img
              src="../.././../public/images/image.png"
              alt="security illustration"
              className="w-full max-w-md"
            />
          </div>

          {/* Right Content */}
          <div className="text-right space-y-4">
            <p className="text-gray-500 text-sm">
              اولین حامی امنیت و آزادی زنان افغان در جهان تکنولوژی
            </p>
            <h1 className="text-3xl md:text-4xl font-bold leading-relaxed">
              با <span className="text-green-500">صدای ما</span>، <br />
              امنیت را جستجو کنید!
            </h1>
            <button className="px-6 py-3 bg-green-500 text-white rounded-xl shadow hover:bg-green-600">
              مشاهده‌ی مطالب
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
