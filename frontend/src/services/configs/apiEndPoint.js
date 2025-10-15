import apiClient from "./apiClient";

export const getFaqData = async (params) =>
  await apiClient.get("/faqs", { params: params }).then((res) => res.data);

export const getFaqById = async (id) => await apiClient.get(`faqs/${id}`);

// export const createFaq = (data) => apiClient.post("/faqs", data);

// export const updateFaq = (id, data) =>
//   apiClient.put(`/faqs/${id}`, data);

// export const deleteFaq = (id) => apiClient.delete(`/faqs/${id}`);

export const getLessonData = async (params) =>
  await apiClient.get("/lessons", { params: params }).then((res) => res.data);

export const getLessonById = async (id) => await apiClient.get(`lessons/${id}`);

// export const createLesson = (data) => apiClient.post("/lessons", data);

// export const updateLesson = (id, data) =>
//   apiClient.put(`/lessons/${id}`, data);

// export const deleteLesson = (id) => apiClient.delete(`/lessons/${id}`);

export const getChatBotData = async (params) =>
  await apiClient.get("/chatbot", { params: params }).then((res) => res.data);

export const getChatBotById = async (id) =>
  await apiClient.get(`chatbot/${id}`);

// export const createChatBot = (data) => apiClient.post("/chatbot", data);

// export const updateChatBot = (id, data) =>
//   apiClient.put(`/chatbot/${id}`, data);

// export const deleteChatBot = (id) => apiClient.delete(`/chatbot/${id}`);

export const getQuizData = async (params) =>
  await apiClient.get("/quizzes", { params: params }).then((res) => res.data);

export const getQuizById = async (id) => await apiClient.get(`quizzes/${id}`);

// export const createQuiz = (data) => apiClient.post("/quizzes", data);

// export const updateQuiz = (id, data) =>
//   apiClient.put(`/quizzes/${id}`, data);

// export const deleteQuiz = (id) => apiClient.delete(`/quizzes/${id}`);

export const getCommentData = async (params) =>
  await apiClient.get("/comments", { params: params }).then((res) => res.data);

export const getCommentById = async (id) =>
  await apiClient.get(`comments/${id}`);

export const createComment = (data) => apiClient.post("/comments", data);

// export const updateComment = (id, data) =>
//   apiClient.put(`/comments/${id}`, data);

// export const deleteComment = (id) => apiClient.delete(`/comments/${id}`);

export const getQuestionData = async (params) =>
  await apiClient.get("/questions", { params: params }).then((res) => res.data);

export const getQuestionById = async (id) =>
  await apiClient.get(`questions/${id}`);

// export const createQuestion = (data) => apiClient.post("/questions", data);

// export const updateQuestion = (id, data) =>
//   apiClient.put(`/questions/${id}`, data);

// export const deleteQuestion = (id) => apiClient.delete(`/questions/${id}`);

export const getQuizAttemptData = async (params) =>
  await apiClient
    .get("/quiz-attempts", { params: params })
    .then((res) => res.data);

export const getQuizAttemptById = async (id) =>
  await apiClient.get(`quiz-attempts/${id}`);

// export const createQuizAttempt = (data) => apiClient.post("/quiz-attempts", data);

// export const updateQuizAttempt = (id, data) =>
//   apiClient.put(`/quiz-attempts/${id}`, data);

// export const deleteQuizAttempt = (id) => apiClient.delete(`/quiz-attempts/${id}`);

export const getQuestionOptionsData = async (params) =>
  await apiClient
    .get("/question-options", { params: params })
    .then((res) => res.data);

export const getQuestionOptionsById = async (id) =>
  await apiClient.get(`question-options/${id}`);

// export const createQuestionOptions = (data) => apiClient.post("/question-options", data);

// export const updateQuestionOptions = (id, data) =>
//   apiClient.put(`/question-options/${id}`, data);

// export const deleteQuestionOptions = (id) => apiClient.delete(`/question-options/${id}`);
