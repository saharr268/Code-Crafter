import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  createComment,
  getCommentById,
  getCommentData,
} from "../configs/apiEndPoint";

export const useCommentData = (pageNumber, pageSize, keyword) => {
  return useQuery({
    queryKey: ["comment-data", pageNumber, pageSize, keyword],
    queryFn: () =>
      getCommentData({
        pageNumber,
        pageSize,
        keyword,
      }),
  });
};

// Get comment by id
export const useGetCommentById = (id) => {
  return useQuery({
    queryKey: ["comment-get-by-id", id],
    queryFn: async () => (id ? await getCommentById(id) : {}),
    enabled: !!id,
  });
};

// create comment
export const useCreateComment = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data) => createComment(data),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["comments-data"],
      });
    },
  });
};

// Update a comment
// export const useUpdateComment = (id: number) => {
//   const queryClient = useQueryClient();
//   return useMutation({
//     mutationFn: (data) => updateComment(id, data),
//     onSuccess: () => {
//       queryClient.invalidateQueries({
//         queryKey: ["comments-data"],
//       });
//       queryClient.invalidateQueries({
//         queryKey: ["comment-get"],
//       });
//     },
//     onError: (error) => {
//       console.error("Mutation failed:", error);
//       alert(`Error: ${error || "Something went wrong."}`);
//     },
//   });
// };
