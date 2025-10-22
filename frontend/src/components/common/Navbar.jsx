import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, Globe } from "lucide-react";
import { AnimationFadeIn } from "./Animations";
import Logo from "../../assets/images/logo-s.png";
import { LanguageToggle } from "./LanguageToggle";

export default function Navbar({ className }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const pathname = location.pathname;
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimationFadeIn>
      <header
        className={`fixed left-6 right-6 z-50 transition-all duration-500 rounded-full sm:m-0
        ${
          scrolled ? "bg-[#101312]" : "bg-[#F5F5F5] backdrop-blur-lg"
        } ${className}`}
      >
        <div className="max-w-screen mx-auto px-4 py-3 flex items-center justify-between">
          {/* دکمه منوی موبایل */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 rounded-lg bg-white text-black shadow"
          >
            <Menu size={24} />
          </button>

          <LanguageToggle />

          {/* menu */}
          <nav
            className={`${
              menuOpen
                ? "flex flex-col absolute top-20 left-0 right-0 bg-background-dark/90 py-5 shadow-lg md:hidden"
                : "hidden md:flex"
            } md:flex-row items-start gap-3 text-xl sm:py-1 sm:px-4 sm:gap-4 md:px-6 sm:ml-0 md:rounded-full transition
    ${
      isHome && !scrolled
        ? "bg-white shadow-sm "
        : "bg-transparent sm:text-black "
    }`}
          >
            {[
              { href: "/support", text: "پشتیبانی" },
              { href: "/resources", text: "منابع" },
              { href: "/practice", text: "تمرین" },
              { href: "/learn", text: "آموزش" },
              { href: "/", text: "خانه" },
            ].map((link, i) => (
              <Link
                key={i}
                to={link.href}
                className={`px-4 py-2 rounded-full transition-all duration-300 ${
                  scrolled ? "text-white" : "text-text-heading"
                }  hover:text-primary-dark`}
              >
                {link.text}
              </Link>
            ))}
          </nav>

          <button className="md:hidden p-2 rounded-lg bg-white ml-32 text-text-heading shadow-2xl">
            <Globe size={25} />
          </button>

          <div className="flex items-center w-20 md:w-40 sm:mr-2 sm:px-5">
            <img src={Logo} alt="Seda Logo" />
          </div>
        </div>
      </header>
    </AnimationFadeIn>
  );
}
