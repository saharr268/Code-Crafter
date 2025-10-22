import { isBoolean } from "lodash";
import { successAlert } from "./alerts";

export const tryCatchHandler = async ({
  handler,
  errorCallback,
  successMessage,
  notShowMessage,
}) => {
  try {
    const result = (await handler()) || { data: {} };
    const {
      data: { succeeded, messages },
    } = result;

    if (isBoolean(succeeded) && succeeded == false) throw messages;

    if (!notShowMessage && (succeeded == undefined || succeeded == true))
      successAlert({
        title: successMessage ?? "Operation Succeed",
      });
    return result;
  } catch (error) {
    console.info("error:", error);
    if (errorCallback) errorCallback(error);
    return undefined;
  }
};
