import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { askChatBot, getChatBotData } from "../configs/apiEndPoint";

export const useChatbotData = () => {
  return useQuery({
    queryKey: ["chatbot-data"],
    queryFn: () => getChatBotData(),
  });
};

export const useAskChatbot = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data) => askChatBot(data),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["ask-chatbot"],
      });
    },
  });
};
