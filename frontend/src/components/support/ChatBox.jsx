import { useFormik } from "formik";
import { FaRegImage, FaStar } from "react-icons/fa";
import { tryCatchHandler } from "../../helpers/utils/handlers";
import { useCreateComment } from "../../services/hooks/comments";
import { CommentValidation } from "../../helpers/utils/validations";
import { CustomRate } from "../controllers/CustomRate";

export default function MessageBox() {
  const { mutateAsync: createComment, isPending: isLoading } =
    useCreateComment();

  const formIK = useFormik({
    initialValues: { comment_text: "", rate: "", is_accepted: "" },
    enableReinitialize: true,
    validateOnChange: false,
    validateOnBlur: false,
    validationSchema: CommentValidation,
    onSubmit: ({ comment_text, rate }, { resetForm }) => {
      tryCatchHandler({
        handler: async () => {
          const finalValues = {
            comment_text: comment_text || "",
            rate: rate || null,
            is_accepted: true,
          };
          const res = await createComment(finalValues);
          resetForm();
          return res;
        },
        successMessage: "دیدگاهتان فرستاده شد!",
        errorCallback: (error) => error,
      });
    },
  });

  return (
    <section className="w-full flex justify-center items-center py-12 px-4 sm:px-8 bg-white">
      <div
        dir="rtl"
        className="w-full max-w-3xl bg-slate-50 rounded-lg shadow-sm p-8"
      >
        <h2 className="text-2xl font-bold mb-3 text-text-heading">
          صندوق ارسال دیدگاه
        </h2>
        <p className="text-text-body text-md leading-6 mb-6">
          دوست عزیز! اگر جوابی برای سوالی که داری در بخش سوالات متداول وجود
          نداشت، می‌توانی به‌صورت ناشناس برای ما پیام ارسال کنی. تیم مدیریت در
          بخش پاسخ پیام‌های شما به آن جواب خواهد داد.
        </p>

        {/* form */}
        <form onSubmit={formIK.handleSubmit} className="space-y-4">
          <div className="relative">
            <textarea
              id="comment_text"
              name="comment_text"
              value={formIK.values.comment_text}
              onChange={formIK.handleChange}
              placeholder="پیام خود را بنویسید..."
              className="w-full min-h-[300px] p-4 rounded-lg border bg-gray-200 border-gray-300 focus:ring-2 focus:ring-primary-deep focus:outline-none text-text-heading resize-none"
            ></textarea>

            {formIK.errors.comment_text && (
              <p className="text-red-500 text-sm mt-1">
                {formIK.errors.comment_text}
              </p>
            )}

            <div className="flex justify-between items-center mt-4">
              <CustomRate
                onChange={formIK.handleChange}
                value={formIK.values.rate}
                name="rate"
              />
              <button
                type="submit"
                className="px-6 py-2 bg-primary-deep text-white rounded-md hover:bg-primary-dark transition"
              >
                {isLoading ? "درحال بارگذازی..." : " ارسال پیام"}
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
