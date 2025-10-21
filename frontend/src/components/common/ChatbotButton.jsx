import { chatbotICON } from "../others/SvgComponent";

export const ChatbotButton = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="w-[100px] h-[100px] flex justify-center items-center fixed bottom-10 right-10 bg-purple-600 hover:bg-purple-700 text-white rounded-full shadow-lg transition-all duration-300 z-40"
    >
      {chatbotICON()}
    </button>
  );
};
