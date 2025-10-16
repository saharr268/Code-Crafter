import { useQuery } from "@tanstack/react-query";
import { getQuestionById, getQuestionData } from "../configs/apiEndPoint";

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
