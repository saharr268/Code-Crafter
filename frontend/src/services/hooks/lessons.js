import { useQuery } from "@tanstack/react-query";
import { getLessonById, getLessonData } from "../configs/apiEndPoint";

export const useLessonData = (pageNumber, pageSize, keyword) => {
  return useQuery({
    queryKey: ["lesson-data", pageNumber, pageSize, keyword],
    queryFn: () =>
      getLessonData({
        pageNumber,
        pageSize,
        keyword,
      }),
  });
};

// Get lesson by id
export const useGetLessonById = (id) => {
  return useQuery({
    queryKey: ["lesson-get-by-id", id],
    queryFn: async () => (id ? await getLessonById(id) : {}),
    enabled: !!id,
  });
};
