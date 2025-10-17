import { number, object, string } from "yup";

export const CommentValidation = () => {
  return object().shape({
    comment_text: string().trim().required("the input is required"),
    rate: number().required("the input is required"),
  });
};
