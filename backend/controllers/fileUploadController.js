import { getUploadFiles, saveFileUpload } from "../models/fileUploadModel.js";

export const uploadFileController = async (req, res) => {
  try {
    if (!req.file && !req.files) {
      return res.status(400).json({ error: "No files uploaded" });
    }

    const uploadedFiles = req.files || [req.file];

    const savedFiles = [];
    for (const file of uploadedFiles) {
      const folderName = file.mimetype.startsWith("image/")
        ? "images"
        : file.mimetype.startsWith("video/")
        ? "videos"
        : file.mimetype.startsWith("audio/")
        ? "audio"
        : "others";
      const saved = await saveFileUpload({
        original_name: file.filename,
        path: file.path,
        mime_type: file.mimetype,
        size: file.size,
        folder_name: folderName,
      });
      savedFiles.push(saved);
    }

    res.status(200).json({
      message: "File(s) uploaded and saved to database successfully ✅",
      files: savedFiles,
    });
  } catch (error) {
    console.error("Upload error:", error);
    res.status(500).json({ error: "Upload failed" });
  }
};

export const getAllUploadedFiles = async (req, res) => {
  try {
    const data = await getUploadFiles();

    res.status(200).json({
      success: true,
      count: data?.length,
      data: data,
    });
  } catch (error) {
    console.error("Error fetching faqs:", error);
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};
