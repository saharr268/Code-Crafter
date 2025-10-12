import express from "express";
import { upload } from "../utils/multer.js";
import { uploadFileController } from "../controllers/fileUploadController.js";

const router = express.Router();

// Single file
router.post("/single", upload.single("file"), uploadFileController);

// Multiple files (optional)
router.post("/multiple", upload.array("files", 10), uploadFileController);

export default router;
