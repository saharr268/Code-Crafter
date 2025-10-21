import { useFormik } from "formik";
import { FaRegImage } from "react-icons/fa";
import { tryCatchHandler } from "../../helpers/utils/handlers";
import { useCreateComment } from "../../services/hooks/comments";
import { CommentValidation } from "../../helpers/utils/validations";

export default function MessageBox() {
  const { mutateAsync: createComment } = useCreateComment();

  const formIK = useFormik({
    initialValues: { comment_text: "", rate: "", is_accepted: "" },
    enableReinitialize: true,
    validateOnChange: false,
    validateOnBlur: false,
    validationSchema: CommentValidation,
    onSubmit: ({ comment_text, rate }) => {
      tryCatchHandler({
        handler: async () =>
          createComment({
            comment_text: comment_text || "",
            rate: rate || null,
            is_accepted: true,
          }),
        successMessage: "دیدگاهتان فرستاده شد!",
        errorCallback: (err) => err,
      });
    },
  });

  return (
    <section className="w-full bg-white py-12 px-6">
      <div className="max-w-3xl mx-auto bg-slate-50 rounded-lg shadow-sm p-8" dir="rtl">
        <h2 className="text-xl font-bold mb-3 text-gray-900">صندوق ارسال پیام</h2>
        <p className="text-gray-600 text-sm leading-6 mb-6">
          اگر جواب سوال شما در بخش سوالات متداول نبود، به‌صورت ناشناس پیام بفرستید.
        </p>

        <form onSubmit={formIK.handleSubmit} className="relative">
          <textarea
            name="comment_text"
            value={formIK.values.comment_text}
            onChange={formIK.handleChange}
            placeholder="پیام خود را بنویسید..."
            className="w-full min-h-[260px] p-4 rounded-lg border bg-gray-200 border-gray-300 focus:ring-2 focus:ring-teal-500 focus:outline-none text-gray-800 resize-none"
          />
          {formIK.errors.comment_text && (
            <p className="text-sm text-red-500 mt-2">{formIK.errors.comment_text}</p>
          )}

          <button
            type="button"
            className="absolute left-6 bottom-6 text-gray-500 hover:text-teal-600"
            aria-label="upload image"
          >
            <FaRegImage size={20} />
          </button>

          <button
            type="submit"
            className="absolute right-6 bottom-6 px-6 py-2 bg-teal-600 text-white rounded-md hover:bg-teal-700 transition"
          >
            ارسال پیام
          </button>
        </form>
      </div>
    </section>
  );
}
