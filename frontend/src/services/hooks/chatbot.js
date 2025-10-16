import { useQuery } from "@tanstack/react-query";
import { getChatbotById, getChatbotData } from "../configs/apiEndPoint";

export const useChatbotData = (pageNumber, pageSize, keyword) => {
  return useQuery({
    queryKey: ["chatbot-data", pageNumber, pageSize, keyword],
    queryFn: () =>
      getChatbotData({
        pageNumber,
        pageSize,
        keyword,
      }),
  });
};

// Get chatbot by id
export const useGetChatbotById = (id) => {
  return useQuery({
    queryKey: ["chatbot-get-by-id", id],
    queryFn: async () => (id ? await getChatbotById(id) : {}),
    enabled: !!id,
  });
};
