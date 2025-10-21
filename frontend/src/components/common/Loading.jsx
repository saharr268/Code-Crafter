import loading from "../../assets/images/Seda_green-loading.webp";
export const SpinnerLoading = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center py-10">
      <div className="relative w-[250px] h-[250px]">
        {/* Background image */}
        <img
          src={loading}
          alt="Loading"
          className="w-full h-full object-contain"
        />

        {/* Animated voice bars */}
        <div className="absolute inset-0 flex items-center justify-center gap-[4px]">
          <span className="w-[10px] h-[30px] bg-white rounded-sm animate-voicebar [animation-delay:-0.4s]"></span>
          <span className="w-[10px] h-[34px] bg-white rounded-sm animate-voicebar [animation-delay:-0.2s]"></span>
          <span className="w-[10px] h-[42px] bg-white rounded-sm animate-voicebar"></span>
          <span className="w-[10px] h-[34px] bg-white rounded-sm animate-voicebar [animation-delay:-0.2s]"></span>
          <span className="w-[10px] h-[30px] bg-white rounded-sm animate-voicebar [animation-delay:-0.4s]"></span>
        </div>
      </div>

      <p className="text-gray-600 font-medium tracking-wide">در حال پردازش</p>
    </div>
  );
};
