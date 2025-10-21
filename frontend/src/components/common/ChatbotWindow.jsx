/* eslint-disable no-unused-vars */
import { useFormik } from "formik";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { useAskChatbot } from "../../services/hooks/chatbot";
import { tryCatchHandler } from "../../helpers/utils/handlers";
import { chatbot2ICON, closeICON, sendICON } from "../others/SvgComponent";

const ChatWindow = ({ isOpen, onClose }) => {
  const messagesEndRef = useRef(null);

  const [messages, setMessages] = useState([
    { from: "bot", text: "چگونه می‌توانم کمکت کنم؟" },
  ]);

  const { mutateAsync: askChatbot, isPending: isLoading } = useAskChatbot();

  const formik = useFormik({
    initialValues: { message: "" },
    onSubmit: ({ message }, { resetForm }) => {
      tryCatchHandler({
        handler: async () => {
          if (!message.trim()) return;
          const userMsg = { from: "user", text: message };
          setMessages((prev) => [...prev, userMsg]);

          setMessages((prev) => [...prev, { from: "bot", text: "..." }]);

          resetForm();
          const res = await askChatbot({ message });
          const botMsg = { from: "bot", text: res?.data?.answer };
          setMessages((prev) => {
            const updated = [...prev];
            updated[updated.length - 1] = botMsg;
            return updated;
          });
        },
      });
    },
  });

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        messagesEndRef.current &&
        !messagesEndRef.current.contains(event.target)
      ) {
        onClose(); // closes chatbot
      }
    }
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", damping: 20 }}
          className="chatbot fixed h-[600px] z-50 bottom-10 right-6 w-[350px] bg-white 
          rounded-[40px] shadow-2xl flex flex-col overflow-hidden"
        >
          {/* Header */}
          <div className="flex items-center justify-between text-text-heading p-6 border-solid border-b-4 border-[#EEEEEE]">
            <h2 className="font-semibold text-[24px] flex items-center gap-2">
              <span className="bg-[#EEEEEE] rounded-full w-[48px] h-[48px] flex justify-center items-center ">
                {chatbot2ICON()}
              </span>
              ربات صدا
            </h2>
            <button
              className="bg-[#ECE4F9] rounded-full w-[48px] h-[48px] flex justify-center items-center "
              onClick={onClose}
            >
              {closeICON()}
            </button>
          </div>

          <div className="flex overflow-hidden flex-col justify-between h-full">
            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-white over">
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`p-3 space-y-2 flex ${
                    msg.from === "bot" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    key={i}
                    className={`w-fit text-base  px-6 py-4 ${
                      msg.from === "bot"
                        ? "rounded-tr-[16px] rounded-br-[16px] rounded-bl-[16px] bg-gray-200 self-start"
                        : "bg-purple-600 text-white rounded-tl-[16px] rounded-bl-[16px] rounded-br-[16px] self-start"
                    }`}
                  >
                    {msg.text === "..." ? (
                      <div className="flex gap-1">
                        <span className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"></span>
                        <span className="w-2 h-2 bg-gray-500 rounded-full animate-bounce delay-150"></span>
                        <span className="w-2 h-2 bg-gray-500 rounded-full animate-bounce delay-300"></span>
                      </div>
                    ) : (
                      msg.text
                    )}
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef}></div>
            </div>

            {/* Input */}
            <form
              onSubmit={formik.handleSubmit}
              className="flex items-center border-t border-gray-200 p-5"
            >
              <input
                type="text"
                name="message"
                value={formik.values.message}
                onChange={formik.handleChange}
                placeholder="پیام خود را بنویسید..."
                className="flex-1 p-[22px] text-sm rounded-[99px] border border-gray-300 focus:outline-none focus:border-purple-500 relative bg-[#F5F5F5]"
              />
              <button
                type="submit"
                disabled={isLoading}
                className="w-[48px] h-[48px] flex justify-center items-center bg-purple-600 absolute left-8 hover:bg-purple-700 text-white rounded-full disabled:bg-purple-200"
              >
                {sendICON()}
              </button>
            </form>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ChatWindow;
