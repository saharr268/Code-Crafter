
// // Servive Card Section

import { GoArrowUpRight } from "react-icons/go";

const cardsection = ({ icon, title, description }) => {
  return(
    <div className="group bg-white rounded-2xl shadow p-6 relative 
                 transition-all duration-300 hover:bg-teal-500 hover:shadow-lg"
    >
      {/* Header: icon right, arrow left */}
      <div className="flex items-center mt-4 mb-4 relative">
        {/* Icon on the right */}
        <div className="ml-auto mr-2 text-teal-500 text-xl transition-colors duration-300 group-hover:text-white">
          {icon}
        </div>

        {/* Arrow inside circle on the left */}
        <div
          className="absolute left-2 w-10 h-10 flex items-center justify-center 
                     rounded-full bg-teal-50 text-gray-500 text-xl
                     transition-colors duration-300 group-hover:bg-white group-hover:text-teal-500"
        >
          <GoArrowUpRight />
        </div>
      </div>

      {/* Text */}
      <h3
        className="font-bold text-lg mb-2 text-right pt-8 pr-2
                   transition-colors duration-300 group-hover:text-white"
      >
        {title}
      </h3>
      <p
        className="text-gray-500 text-sm leading-relaxed text-right pb-6 pr-2
                   transition-colors duration-300 group-hover:text-white"
      >
        {description}
      </p>
    </div>
  );
};



export default cardsection;

