import { enqueueSnackbar } from "notistack";

const defaultAlert = () => ({
  autoHideDuration: 1000 * 3,
  preventDuplicate: true,
  anchorOrigin: {
    horizontal: "right",
    vertical: "bottom",
  },
});

export const errorAlert = ({ title, timer }) => {
  const defaultAlertObj = defaultAlert();
  const { autoHideDuration } = defaultAlertObj;
  enqueueSnackbar(title, {
    variant: "error",
    ...defaultAlertObj,
    autoHideDuration: timer ?? autoHideDuration,
    timer: timer ?? autoHideDuration,
  });
};

export const successAlert = ({ title, timer }) => {
  const defaultAlertObj = defaultAlert();
  const { autoHideDuration } = defaultAlertObj;
  enqueueSnackbar(title, {
    variant: "success",
    ...defaultAlertObj,
    autoHideDuration: timer ?? autoHideDuration,
    timer: timer ?? autoHideDuration,
  });
};
