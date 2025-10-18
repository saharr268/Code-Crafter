import { useQuery } from "@tanstack/react-query";
import {
  getOuestionOptionByQuestionId,
  getQuestionById,
  getQuestionByQuizId,
  getQuestionData,
} from "../configs/apiEndPoint";

export const useQuestionData = (pageNumber, pageSize, keyword) => {
  return useQuery({
    queryKey: ["question-data", pageNumber, pageSize, keyword],
    queryFn: () =>
      getQuestionData({
        pageNumber,
        pageSize,
        keyword,
      }),
  });
};

// Get question by id
export const useGetQuestionById = (id) => {
  return useQuery({
    queryKey: ["question-get-by-id", id],
    queryFn: async () => (id ? await getQuestionById(id) : {}),
    enabled: !!id,
  });
};
// Get question by quiz id
export const useGetQuestionByQuizId = (id) => {
  return useQuery({
    queryKey: ["question-get-by-quiz-id", id],
    queryFn: async () => (id ? await getQuestionByQuizId(id) : {}),
    enabled: !!id,
  });
};

export const useGetOuestionOptionByQuestionId = (id) => {
  return useQuery({
    queryKey: ["question-get-by-quiz-id", id],
    queryFn: async () => (id ? await getOuestionOptionByQuestionId(id) : {}),
    enabled: !!id,
  });
};
