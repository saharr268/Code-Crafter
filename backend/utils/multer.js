import multer from "multer";
import path from "path";
import fs from "fs";

import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const FILE_TYPE_FOLDERS = {
  images: ["image/jpeg", "image/png", "image/webp", "image/gif"],
  pdfs: ["application/pdf"],
  documents: [
    "application/msword",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    "text/plain",
  ],
  audio: ["audio/mpeg", "audio/wav"],
  videos: ["video/mp4", "video/mpeg"],
  others: ["application/octet-stream"],
};

const getFolderByMime = (mimeType) => {
  for (const [folder, types] of Object.entries(FILE_TYPE_FOLDERS)) {
    if (types.includes(mimeType)) return folder;
  }
  return "others";
};

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const folderName = getFolderByMime(file.mimetype);
    const uploadPath = path.join(__dirname, `../uploads/${folderName}`);

    fs.mkdirSync(uploadPath, { recursive: true });

    cb(null, uploadPath);
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + path.extname(file.originalname));
  },
});

const allowedMimeTypes = Object.values(FILE_TYPE_FOLDERS).flat();

const fileFilter = (req, file, cb) => {
  if (allowedMimeTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error("Invalid file type"), false);
  }
};

export const upload = multer({
  storage,
  fileFilter,
  limits: { fileSize: 50 * 1024 * 1024 }, // 50MB max
});
