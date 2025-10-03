import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-10">
      <div className="max-w-6xl mx-auto text-center px-4">
        {/* لوگو */}
        <div className="flex justify-center">
          <div className="bg-white text-black px-6 py-2 rounded-full font-semibold">
            لوگو
          </div>
        </div>

        {/* متن توضیحی */}
        <p className="text-gray-400 mt-6 leading-relaxed max-w-2xl mx-auto">
          ما زنان افغان را با مهارت‌های امنیت دیجیتال توانمند می‌سازیم. صدا نه
          تنها یک آموزش‌دهنده، بلکه یک حامی برای امنیت و آزادی زنان افغان در
          دنیای دیجیتال به شمار می‌رود.
        </p>

        {/* منو */}
        <div className="flex justify-center gap-10 mt-6 text-gray-300">
          <a href="#">پشتیبانی</a>
          <a href="#">منابع</a>
          <a href="#">تمرین</a>
          <a href="#">آموزش</a>
          <a href="#">خانه</a>
        </div>

        {/* ایمیل */}
        <div className="flex justify-center items-center gap-2 mt-6 text-gray-400">
          <span className="material-icons">email</span>
          <a href="mailto:codecrafter@seda.org">codecrafter@seda.org</a>
        </div>

        {/* کپی‌رایت و شبکه‌های اجتماعی */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-8 border-t border-gray-700 pt-6 text-sm text-gray-400">
          <p>©2025 Code Crafter. All Rights Reserved.</p>
          {/* Social Icons */}
          <div className="flex space-x-4 text-xl pt-2">
            <a href="#" className="hover:text-blue-600">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-pink-500">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-blue-700">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
