import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="flex flex-col items-end text-right space-y-3">
          <h2 className="text-lg font-semibold">درباره ما</h2>
          <p className="text-sm leading-7 max-w-md">
            ما زنان افغان را با مهارت‌های امنیت دیجیتال توانمند می‌سازیم. صدا نه
            تنها یک آموزش‌دهنده، بلکه یک حامی برای امنیت و آزادی زنان افغان در
            دنیای دیجیتال به‌شمار می‌رود.
          </p>
          <a href="mailto:info@seda.org" className="text-sm hover:underline">
            info@seda.org
          </a>

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
      <div className="h-px bg-gray-800"></div>
    </footer>
  );
}
