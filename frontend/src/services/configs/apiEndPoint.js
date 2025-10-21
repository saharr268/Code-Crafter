import apiClient from "./apiClient";

// FAQ
export const getFaqData = async (params) =>
  await apiClient.get("/faqs", { params: params }).then((res) => res.data);

export const getFaqById = async (id) => await apiClient.get(`faqs/${id}`);

// Lessons

export const getLessonData = async (params) =>
  await apiClient.get("/lessons", { params: params }).then((res) => res.data);

export const getLessonById = async (id) => await apiClient.get(`lessons/${id}`);

// Chatbot

export const getChatBotData = async (params) =>
  await apiClient.get("/chatbot", { params: params }).then((res) => res.data);

export const askChatBot = (data) => apiClient.post("/chatbot/ask", data);

// Quiz

export const getQuizData = async (params) =>
  await apiClient.get("/quizzes", { params: params }).then((res) => res.data);

export const getQuizById = async (id) => await apiClient.get(`quizzes/${id}`);

export const getQuizByLessonId = async (id) =>
  await apiClient.get(`quizzes/lesson-id/${id}`);

// Comments

export const getCommentData = async (params) =>
  await apiClient.get("/comments", { params: params }).then((res) => res.data);

export const getCommentById = async (id) =>
  await apiClient.get(`comments/${id}`);

export const createComment = async (data) => apiClient.post("/comments", data);

// Questions

export const getQuestionData = async (params) =>
  await apiClient.get("/questions", { params: params }).then((res) => res.data);

export const getQuestionById = async (id) =>
  await apiClient.get(`questions/${id}`);

export const getQuestionByQuizId = async (id) =>
  await apiClient.get(`questions/quiz-id/${id}`);

// Quiz Attempt

export const getQuizAttemptData = async (params) =>
  await apiClient
    .get("/quiz-attempts", { params: params })
    .then((res) => res.data);

export const getQuizAttemptById = async (id) =>
  await apiClient.get(`quiz-attempts/${id}`);

export const getQuizAttemptByQuizId = async (id) =>
  await apiClient.get(`quiz-attempts/quiz-id/${id}`);

export const createQuizAttempt = async (data) =>
  apiClient.post("/quiz-attempts", data);

// question Option
export const getQuestionOptionsData = async (params) =>
  await apiClient
    .get("/question-options", { params: params })
    .then((res) => res.data);

export const getQuestionOptionsById = async (id) =>
  await apiClient.get(`question-options/${id}`);

export const getOuestionOptionByQuestionId = async (id) =>
  await apiClient.get(`question-options/question-id/${id}`);
