export default function Navbar() {
  return (
    <header className="bg-black/90 shadow-md rounded-full">
      <div className="max-w-screen mx-auto px-6 py-1">
        <div className="flex flex-wrap md:flex-nowrap justify-between items-center py-3">
          {/*Language Switch*/}
          <div className=" relative flex items-center gap-1">
            <button className="absolute px-9 py-3  bg-[#03C0C1] text-white rounded-full text-lg">
              فارسی
            </button>
            <button className="px-12 py-3 mr-0 bg-gray-50 rounded-full text-lg ml-20">
              پشتو
            </button>
          </div>

          {/* Menu */}
          <nav className="w-full md:w-auto flex flex-col md:flex-row items-center gap-5 md:gap-8 text-white text-2xl mb-2 md:mb-0">
            <a href="#" className="hover:text-[#03C0C1]">
              پشتیبانی
            </a>
            <a href="practice" className="hover:text-[#03C0C1]">
              تمرین
            </a>
            <a href="learm" className="hover:text-[#03C0C1]">
              آموزش
            </a>
            <a href="/" className="hover:text-[#03C0C1]">
              خانه
            </a>
          </nav>

          {/* Logo */}
          <div className="flex items-center mb-2 md:mb-0">
            <div className="px-4 py-2 bg-black text-white rounded-full text-sm font-semibold">
              لوگوی صدا
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
