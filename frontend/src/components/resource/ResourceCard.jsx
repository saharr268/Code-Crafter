// frontend/src/components/ResourceCard.jsx
import { FaCheck } from "react-icons/fa";

const ResourceCard = ({ name, website, logo, rating, features, link }) => {
  return (
    <div className="bg-white hover:bg-teal-50 shadow-md rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-6 transition-all duration-300">
      
      {/* Left side: Website link + button */}
      <div className="flex flex-col justify-between h-full w-full md:w-1/4 text-center md:text-right">
        <a 
          href={website} 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-gray-500 text-sm mb-4 underline"
        >
          {website.replace("https://", "").replace("www.", "")}
        </a>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-teal-500 hover:bg-teal-600 text-white rounded-lg py-2 px-4 text-sm transition-colors duration-300"
        >
          دانلود وی‌پی‌ان
        </a>
      </div>

      {/* Middle: Text content */}
      <div className="flex-1 text-right">
        <ul className="space-y-2 text-gray-700 text-sm">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start justify-end gap-2">
              <span>{feature}</span>
              <FaCheck className="text-teal-500 mt-1 flex-shrink-0" />
            </li>
          ))}
        </ul>
      </div>

      {/* Right side: Logo and rating */}
      <div className="flex flex-col items-center justify-center w-full md:w-1/4">
        <img src={logo} alt={name} className="w-24 h-24 object-contain mb-2" />
        <p className="text-gray-700 font-medium">{name}</p>
        <p className="text-sm text-gray-500 mt-1">⭐ {rating}</p>
      </div>
    </div>
  );
};

export default ResourceCard;
