import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom"; // 👈 مسیر فعلی
import { Menu, Globe } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation(); // مسیر فعلی صفحه
  const pathname = location.pathname;
  const isHome = pathname === "/"; // بررسی اینکه در صفحه Home هستیم یا نه

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed left-6 right-6 z-50 transition-all duration-500 rounded-full sm:m-0
        ${
          scrolled
            ? "bg-gray-700/30 backdrop-blur-lg"
            : "bg-[#F5F5F5] backdrop-blur-lg"
        }`}
    >
      <div className="max-w-screen mx-auto px-4 py-3 flex items-center justify-between">
        {/* دکمه منوی موبایل */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 rounded-lg bg-white text-black shadow"
        >
          <Menu size={24} />
        </button>

        {/* دکمه تغییر زبان */}
        <div className="hidden md:flex relative items-center gap-1">
          <button className="absolute px-6 py-2 rounded-full text-lg bg-[#03C0C1] text-white">
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
          } md:flex-row items-center gap-6 text-xl sm:py-1 sm:px-4 sm:gap-4 md:px-6 sm:ml-0 md:rounded-full transition
    ${isHome && !scrolled ? "bg-white shadow-md" : "bg-transparent"}`}
        >
          {[
            { href: "/", text: "خانه" },
            { href: "/learn", text: "آموزش" },
            { href: "/practice", text: "تمرین" },
            { href: "/support", text: "پشتیبانی" },
          ].map((link, i) => (
            <a
              key={i}
              href={link.href}
              className="px-4 py-2 rounded-full transition-all duration-300 text-black hover:text-[#03C0C1]"
            >
              {link.text}
            </a>
          ))}
        </nav>

        {/* آیکن کره زمین در موبایل */}
        <button className="md:hidden p-2 rounded-lg bg-white ml-32 text-black shadow">
          <Globe size={20} />
        </button>

        {/* لوگو */}
        <div className="flex items-center px-3 py-2 rounded-full sm:mr-10 sm:px-5 font-semibold text-sm bg-black text-white">
          لوگوی صدا
        </div>
      </div>
    </header>
  );
}
