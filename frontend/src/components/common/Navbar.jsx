import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed left-6 right-6 z-50 transition-all rounded-full duration-500 shadow-md 
    ${scrolled ? "bg-gray-700/30" : "bg-black/90"}`}
    >
      <div className="max-w-screen mx-auto px-6 py-1">
        <div className="flex flex-wrap md:flex-nowrap justify-between items-center py-3">
          {/* Language Switch */}
          <div className="relative flex items-center gap-1">
            <button
              className={`absolute px-9 py-3 rounded-full text-lg transition ${
                scrolled ? "bg-[#03C0C1] text-white" : "bg-[#03C0C1] text-white"
              }`}
            >
              فارسی
            </button>
            <button
              className={`px-12 py-3 mr-0 rounded-full text-lg ml-20 transition ${
                scrolled ? "bg-gray-200 text-black" : "bg-gray-50 text-black"
              }`}
            >
              پشتو
            </button>
          </div>

          {/* Menu */}
          <nav
            className={`w-full md:w-auto flex flex-col md:flex-row items-center gap-5 md:gap-8 text-2xl mb-2 md:mb-0 transition ${
              scrolled ? "text-black" : "text-white"
            }`}
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
          </nav>

          {/* Logo */}
          <div className="flex items-center mb-2 md:mb-0">
            <div
              className={`px-4 py-2 rounded-full text-sm font-semibold transition ${
                scrolled ? "bg-black text-white" : "bg-white text-black"
              }`}
            >
              لوگوی صدا
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
