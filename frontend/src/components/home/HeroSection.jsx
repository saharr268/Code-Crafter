import Navbar from "../common/Navbar";
import heroImage from "../../assets/images/bro.png"

export default function HeroSection() {
  return (
    <section className="flex items-center bg-[#F5F5F5] px-4 sm:px-20 md:px-12 m-4 md:mt-6 rounded-[40px] max-h-auto py-10">
      {/* 🔹 Navbar */}
      <div className="fixed w-full top-6 z-50">
        <Navbar />
      </div>

      <div className="flex flex-col-reverse md:flex-row items-center mt-20 justify-between w-full p-0 md:py-10">
        <div className="w-full md:w-1/2 flex justify-center md:justify-start mt-10 md:mt-0 sm:ml-10 md:mr-20">
          <img
            src={heroImage}
            alt="security illustration"
            className="sm:w-[650px] md:h-auto lg:w-[650px] xl:w-[600px]"
          />
        </div>

        <div className="w-full md:w-1/2 text-right mr-5 sm:mr-0 md:text-right">
          <p className="text-gray-500 text-sm sm:text-base md:text-md mt-6 font-medium mb-4">
            اولین حامی امنیت و آزادی زنان افغان در جهان تکنولوژی
          </p>

          <h1 className="text-3xl sm:text-4xl md:text-4xl mt-6 lg:text-6xl font-bold leading-relaxed text-gray-900">
            با <span className="text-[#03C0C1]">صدا</span> ، ما
            <br />
           !امنیت را جستجو کنید
          </h1>

          <button className="mt-10 mb-6 sm:mb-10 sm:mt-10 md:mt-20 bg-[#03C0C1] text-white text-sm sm:text-base font-medium px-6 sm:px-8 py-3 rounded-lg hover:bg-white hover:text-[#03C0C1] border-2 border-[#03C0C1] transition-all duration-300">
            مشاهده‌ی مطالب
          </button>
        </div>
      </div>
    </section>
  );
}
