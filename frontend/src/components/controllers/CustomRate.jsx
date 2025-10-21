import { useState } from "react";
import { Star } from "lucide-react";

export const CustomRate = ({ value = 0, onChange, name, max = 5 }) => {
  const [hoverValue, setHoverValue] = useState(undefined);

  const handleClick = (newValue) => {
    if (onChange) {
      // mimic MUI's onChange(e, value) style
      onChange({
        target: { name, value: newValue },
      });
    }
  };

  return (
    <div className="flex flex-row-reverse justify-end gap-1 cursor-pointer">
      {[...Array(max)].map((_, index) => {
        const currentValue = index + 1;
        return (
          <Star
            key={currentValue}
            size={30}
            onClick={() => handleClick(currentValue)}
            onMouseEnter={() => setHoverValue(currentValue)}
            onMouseLeave={() => setHoverValue(undefined)}
            className={`transition-all duration-200 ${
              (hoverValue || value) >= currentValue
                ? "fill-yellow-400 text-yellow-400 scale-110"
                : "text-gray-300"
            }`}
          />
        );
      })}
    </div>
  );
};
