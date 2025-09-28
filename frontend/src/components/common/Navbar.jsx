// src/components/NavBar.jsx
export default function Navbar() {
  return (
    <header className="flex gap-72">
      {/* Language Switch */}
      <div className="flex items-center ">
        <button className="px-3 py-1 bg-black text-white rounded-full text-xs">
          پشتو
        </button>
        <button className="px-3 py-1 bg-gray-50 rounded-full text-xs">
          فارسی
        </button>
      </div>
      {/* Menu */}
      <nav className="flex justify-between items-center px-12 py-2 rounded-full shadow space-x-24 bg-white border text-gray-700 text-sm">
        <a href="#" className="hover:text-green-600">
          پشتیبانی
        </a>
        <a href="#" className="hover:text-green-600">
          تمرین
        </a>
        <a href="#" className="hover:text-green-600">
          آموزش
        </a>
        <a href="#" className="hover:text-green-600">
          خانه
        </a>
      </nav>
      {/* Logo */}
      <div className="flex items-center  px-4 py-2 bg-black text-white rounded-full text-sm font-semibold p-l">
        لوگوی صدا
      </div>
    </header>
  );
}
