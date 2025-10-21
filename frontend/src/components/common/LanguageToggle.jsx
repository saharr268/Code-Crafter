// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { useState } from "react";

export const LanguageToggle = () => {
  const [lang, setLang] = useState("fa"); // default = Farsi

  const toggleLang = () => {
    setLang(lang === "fa" ? "ps" : "fa");
  };

  return (
    <div
      onClick={toggleLang}
      className="hidden md:flex relative w-44 h-10 bg-white rounded-full items-center cursor-pointer select-none"
    >
      {/* Background slider */}
      <motion.div
        layout
        transition={{ type: "spring", stiffness: 400, damping: 30 }}
        className={`absolute w-1/2 h-full rounded-full ${
          lang === "fa" ? "left-0 bg-primary-dark" : "left-1/2 bg-primary-dark"
        }`}
      ></motion.div>

      {/* Labels */}
      <div
        className={`z-10 flex-1 text-center font-semibold transition-colors duration-300 ${
          lang === "fa" ? "text-white" : "text-black"
        }`}
      >
        فارسی
      </div>
      <div
        className={`z-10 flex-1 text-center font-semibold transition-colors duration-300 ${
          lang === "ps" ? "text-white" : "text-black"
        }`}
      >
        پشتو
      </div>
    </div>
  );
};

<div className="hidden md:flex relative items-center gap-1">
  <button className="absolute px-8 py-2 rounded-full text-xl bg-primary-dark text-white">
    فارسی
  </button>
  <button className="px-9 py-2 ml-20 rounded-full text-xl bg-white text-black">
    پشتو
  </button>
</div>;
