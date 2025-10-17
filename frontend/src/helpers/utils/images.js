import { BASE_URL } from "../constant/statics";

import emptyUserImage from "../../assets/images/about.png"; //! CHANGE
import emptyImage from "../../assets/images/about.png"; //! CHANGE

export const urlImageHandler = (url, isUserImageEmpty, customSourceImage) => {
  const sourceImage = customSourceImage ? customSourceImage : BASE_URL;

  if (url) {
    if (url?.includes(sourceImage)) return url;
    if (url) return (customSourceImage ? customSourceImage : BASE_URL) + url;
  }

  return isUserImageEmpty ? emptyUserImage : emptyImage;
};
