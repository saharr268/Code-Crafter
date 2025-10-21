import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { TbMailFilled } from "react-icons/tb";
import { AnimationFadeIn } from "./Animations";
import Logo from "../../assets/images/logo.png";

export default function Footer() {
  return (
    <AnimationFadeIn>
      <footer className="bg-background-dark text-white py-10">
        <div className="max-w-6xl mx-auto text-center px-4">
          {/* لوگو */}
          <div className="flex justify-center mt-12 mb-6">
            <div className="px-6 py-2 w-56 rounded-full font-semibold">
              <img src={Logo} alt="Seda Logo" />
            </div>
          </div>

          {/* متن توضیحی */}
          <p className="text-white mt-8 leading-relaxed max-w-2xl mx-auto">
            ما زنان افغان را با مهارت‌های امنیت دیجیتال توانمند می‌سازیم. صدا نه
            تنها یک آموزش‌دهنده، بلکه یک حامی برای امنیت و آزادی زنان افغان در
            دنیای دیجیتال به شمار می‌رود.
          </p>

          {/* منو */}
          <div className="flex justify-center gap-10 mt-10 text-white">
            <a className="hover:text-teal-500" href="/support">
              پشتیبانی
            </a>
            <a className="hover:text-teal-500" href="/resources">
              منابع
            </a>
            <a className="hover:text-teal-500" href="/practice">
              تمرین
            </a>
            <a className="hover:text-teal-500" href="/learn">
              آموزش
            </a>
            <a className="hover:text-teal-500" href="/">
              خانه
            </a>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* ایمیل */}
            <div className="flex items-center gap-2 mt-10 text-white">
              <span>
                <TbMailFilled />
              </span>
              <a href="mailto:info@codetoinspire.org">info@codetoinspire.org</a>
            </div>

            {/* Social Icons */}
            <div className="flex space-x-4 text-m mt-12">
              <a
                href="https://www.facebook.com/CodeToInspire/"
                className="hover:text-teal-500"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://www.instagram.com/codetoinspire/?hl=en"
                className="hover:text-teal-500"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.linkedin.com/company/code-to-inspire/posts/?feedView=all"
                className="hover:text-teal-500"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          {/* divider */}
          <div class="h-px mt-4 bg-[#222222]"></div>

          {/* کپی‌رایت و شبکه‌های اجتماعی */}
          <div className="flex flex-col md:flex-row justify-center items-center mt-8 mb-8 border-t border-gray-700 text-sm text-gray-200">
            <p>©2025 Code Crafter. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </AnimationFadeIn>
  );
}
