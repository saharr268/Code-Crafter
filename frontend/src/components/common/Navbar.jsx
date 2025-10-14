import { useState, useEffect } from "react";
import { Menu, Globe } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed left-6 right-6 z-50 transition-all duration-500 rounded-full sm:ml-0 sm:m-0 md:gap-6
      ${
        scrolled
          ? "bg-gray-700/30 backdrop-blur-lg"
          : "bg-[#F5F5F5] backdrop-blur-lg"
      }`}
    >
      <div className="max-w-screen mx-auto px-4 py-3 flex items-center justify-between sm:gap-2 sm:pr-0 sm:pl-0">
        {/* دکمه منوی موبایل */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 rounded-lg bg-white text-black shadow"
        >
          <Menu size={24} />
        </button>

        {/* دکمه تغییر زبان */}
        <div className="hidden md:flex relative items-center gap-1 md:ml-0">
          <button className="absolute px-8 py-2 rounded-full text-lg bg-[#03C0C1] text-white">
            فارسی
          </button>
          <button className="px-10 py-2 ml-20 rounded-full text-lg bg-gray-50 text-black">
            پشتو
          </button>
        </div>

        {/* منو */}
        <nav
          className={`${
            menuOpen
              ? "flex flex-col absolute top-20 left-0 right-0 bg-black/90 py-5 shadow-lg md:hidden"
              : "hidden md:flex"
          } md:flex-row items-center gap-6 text-xl sm:py-3 md:bg-white sm:px-8 sm:gap-4 md:px-12 md:py-4 md:rounded-full transition`}
        >
          <a href="support" className="hover:text-[#03C0C1]">
            پشتیبانی
          </a>
          <a href="practice" className="hover:text-[#03C0C1]">
            تمرین
          </a>
          <a href="learn" className="hover:text-[#03C0C1]">
            آموزش
          </a>
          <a href="/" className="hover:text-[#03C0C1]">
            خانه
          </a>

          {/* دکمه تغییر زبان در موبایل */}
          <div className="flex md:hidden justify-center mt-4 gap-2 sm:ml-10">
            <button className="bg-[#03C0C1] text-white px-6 py-2 rounded-full">
              فارسی
            </button>
            <button className="bg-gray-100 text-black px-6 py-2 rounded-full">
              پشتو
            </button>
          </div>
        </nav>
        {/* آیکن کره زمین در موبایل */}
        <button className="md:hidden p-2 rounded-lg bg-white ml-32 text-black shadow">
          <Globe size={20} />
        </button>

        {/* لوگو */}
        <div
          className={`flex items-center px-3 py-2 rounded-full md:mr-10 sm:px-5 font-semibold text-sm transition bg-black text-white ${
            scrolled ? "bg-black text-white" : ""
          }`}
        >
          لوگوی صدا
        </div>
      </div>
    </header>
  );
}
