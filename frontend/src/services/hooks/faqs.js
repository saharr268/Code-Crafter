import { useQuery } from "@tanstack/react-query";
import { getFaqById, getFaqData } from "../configs/apiEndPoint";

export const useFaqData = (pageNumber, pageSize, keyword) => {
  return useQuery({
    queryKey: ["faq-data", pageNumber, pageSize, keyword],
    queryFn: () =>
      getFaqData({
        pageNumber,
        pageSize,
        keyword,
      }),
  });
};

// Get faq by id
export const useGetFaqById = (id) => {
  return useQuery({
    queryKey: ["faq-get-by-id", id],
    queryFn: async () => (id ? await getFaqById(id) : {}),
    enabled: !!id, // prevents query from running if id is falsy
  });
};
