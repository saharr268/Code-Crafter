import React, { useState } from "react";
import { GoArrowLeft } from "react-icons/go";
import { useNavigate, useParams } from "react-router-dom";
import {
  useGetOuestionOptionByQuestionId,
  useGetQuestionByQuizId,
} from "../../services/hooks/questions";
import Footer from "../../components/common/Footer";

const Quiz = () => {
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState(null);
  const navigate = useNavigate();

  const { id: currentQuizId } = useParams();

  const { data: questionsByQuiz } = useGetQuestionByQuizId(currentQuizId);

  const questions = questionsByQuiz?.data ?? [];

  const { data: questionOptionsById, isPending } =
    useGetOuestionOptionByQuestionId(questions[current]?.id);

  const questionOptions = questionOptionsById?.data ?? [];

  const handleNext = () => {
    const isCorrect = selected === questions[current].correct_answer;

    // save this question’s result in state
    setAnswers((prev) => [
      ...prev,
      {
        questionId: questions[current].id,
        questionText: questions[current].question_text,
        selected,
        correctAnswer: questions[current].correct_answer,
        isCorrect,
      },
    ]);

    // update score
    if (isCorrect) setScore((prev) => prev + 1);

    // go next or finish
    if (current < questions.length - 1) {
      setCurrent(current + 1);
      setSelected(null);
    } else {
      // done! navigate to result page
      navigate(`/practice/result/${currentQuizId}`, {
        state: {
          total: questions.length,
          score: score + (isCorrect ? 1 : 0),
          answers,
        },
      });
    }
  };
  const handleBack = () => {
    if (current > 0) setCurrent(current - 1);
  };

  const progress = ((current + 1) / questions.length) * 100;

  return (
    <div dir="rtl" className="w-full flex flex-col  bg-white">
      {/* Header Section */}
      <header className="bg-black text-white p-6 flex items-center justify-between">
        <div className="flex items-center">
          <button
            onClick={() => navigate("/practice")}
            className="absolute left-4 xl:left-12 w-12 h-12 flex items-center justify-center rounded-full bg-gray-900 text-background-card hover:bg-gray-800 transition disabled:opacity-40 shadow"
          >
            <GoArrowLeft size={24} />
          </button>

          <img src="logo.png" alt="لوگو" className="h-10 object-contain" />
        </div>
      </header>

      <main className="w-full h-full px-[100px] flex flex-col mt-8 mb-24 gap-4">
        <div className="w-full flex justify-end">
          <div className="w-fit">
            <p className="text-base mb-2 text-right">
              سوال {current + 1} از {questions.length}
            </p>
            <div className="w-60 bg-gray-200 rounded-full h-6">
              <div
                className="bg-purple-500 h-6 rounded-full transition-all duration-300"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-16">
          <div className="flex flex-col gap-8">
            <p className="text-3xl text-purple-600 font-bold">سوال اول </p>
            <h2 dir="rtl" className="text-lg font-semibold text-gray-700">
              {questions[current]?.question_text}
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {questionOptions?.map(({ id, option_text }) => (
              <button
                key={id}
                onClick={() => setSelected(option_text)}
                className={`py-4 px-6 rounded-xl border transition-colors text-black text-start text-xl ${
                  selected === option_text
                    ? "border-purple-500 text-purple-600 bg-purple-50"
                    : "bg-gray-100 hover:bg-gray-200 text-gray-700"
                }`}
              >
                <p>{option_text}</p>
              </button>
            ))}
          </div>

          <div className="flex justify-center gap-4">
            <button
              onClick={handleNext}
              disabled={isPending}
              className="bg-purple-600 hover:bg-purple-700 text-white px-16 py-4 rounded-lg"
            >
              {current === questions.length - 1 ? "مشاهده نتیجه" : "سوال بعد"}
            </button>
            <button
              onClick={handleBack}
              disabled={current === 0}
              className="border border-black text-text-body px-16 py-4 rounded-[10px] hover:bg-gray-100 disabled:opacity-50"
            >
              برگشت
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Quiz;
