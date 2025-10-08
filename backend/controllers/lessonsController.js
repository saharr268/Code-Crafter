import {
  editLesson,
  lessonById,
  createLesson,
  getAllLessons,
  removeLesson,
} from "../models/lessonsModel.js";

export const getLessons = async (req, res) => {
  try {
    const { pageNumber, pageSize, keyword } = req.query;

    const { lessonData, totalCount, totalPages } = await getAllLessons({
      pageNumber: parseInt(pageNumber) || 1,
      pageSize: parseInt(pageSize) || 5,
      keyword,
    });

    res.status(200).json({
      success: true,
      count: lessonData?.length,
      totalCount,
      totalPages,
      data: lessonData,
    });
  } catch (error) {
    console.error("Error fetching lessons:", error);
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};

export const getLessonById = async (req, res) => {
  const { id } = req.params;

  try {
    const lesson = await lessonById(id);
    if (!lesson) {
      return res.status(404).json({ error: "Lesson not found" });
    }
    res.json(lesson);
  } catch (err) {
    console.log("Error fetching lesson by id: ", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const addLesson = async (req, res) => {
  const {
    content,
    thumbnail_url,
    video_url,
    pdf_url,
    file_url,
    created_at,
    updated_at,
    short_description,
  } = req.body;

  try {
    if (!content) {
      return res.status(400).json({
        error: "lesson text are required",
      });
    }
    const newLesson = await createLesson({
      content,
      short_description,
      thumbnail_url,
      video_url,
      pdf_url,
      file_url,
      created_at,
      updated_at,
    });
    res.status(201).json(newLesson);
  } catch (err) {
    console.log("Error creating lessons: ", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
export const updateLesson = async (req, res) => {
  const { id } = req.params;
  const {
    content,
    short_description,
    thumbnail_url,
    video_url,
    pdf_url,
    file_url,
    created_at,
    updated_at,
  } = req.body;
  try {
    const updated = await editLesson(id, {
      content,
      short_description,
      thumbnail_url,
      video_url,
      pdf_url,
      file_url,
      created_at,
      updated_at,
    });

    if (!updated) {
      return res.status(404).json({ error: "lesson Not Found" });
    }

    res.json(updated);
  } catch (err) {
    console.log("Error updating lessons: ", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const deleteLesson = async (req, res) => {
  const { id } = req.params;
  try {
    const deleted = await removeLesson(id);

    if (!deleted) {
      return res.status(404).json({ error: "lesson Not Found" });
    }

    res.json({ message: "lesson deleted successfully", deleted });
  } catch (err) {
    console.log("Error deleting lessons", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
