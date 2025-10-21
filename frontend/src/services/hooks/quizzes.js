import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  createQuizAttempt,
  getQuizAttemptByQuizId,
  getQuizById,
  getQuizByLessonId,
  getQuizData,
} from "../configs/apiEndPoint";

export const useQuizData = (pageNumber, pageSize, keyword) => {
  return useQuery({
    queryKey: ["quiz-data", pageNumber, pageSize, keyword],
    queryFn: () =>
      getQuizData({
        pageNumber,
        pageSize,
        keyword,
      }),
  });
};

// Get quiz by id
export const useGetQuizById = (id) => {
  return useQuery({
    queryKey: ["quiz-get-by-id", id],
    queryFn: async () => (id ? await getQuizById(id) : {}),
    enabled: !!id,
  });
};

export const useGetQuizByLessonId = (id) => {
  return useQuery({
    queryKey: ["quiz-get-by-id", id],
    queryFn: async () => (id ? await getQuizByLessonId(id) : {}),
    enabled: !!id,
  });
};

export const useGetQuizAttemptByQuizId = (id) => {
  return useQuery({
    queryKey: ["quiz-get-by-id", id],
    queryFn: async () => (id ? await getQuizAttemptByQuizId(id) : {}),
    enabled: !!id,
  });
};

export const useCreateQuizAttempt = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data) => createQuizAttempt(data),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["quiz-attempt-data"],
      });
    },
  });
};
