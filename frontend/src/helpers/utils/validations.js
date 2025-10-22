import { number, object, string } from "yup";

export const CommentValidation = () => {
  return object().shape({
    comment_text: string().trim().required("ورودی دیدگاه الزامی است"),
    rate: number().required("ورودی امتیاز الزامی است"),
  });
};
