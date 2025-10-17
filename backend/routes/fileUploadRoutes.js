import express from "express";
import { upload } from "../utils/multer.js";
import {
  getAllUploadedFiles,
  uploadFileController,
} from "../controllers/fileUploadController.js";

const router = express.Router();

router.get("/", getAllUploadedFiles);
router.post("/single", upload.single("image"), uploadFileController);
router.post("/multiple", upload.array("files", 10), uploadFileController);

export default router;
