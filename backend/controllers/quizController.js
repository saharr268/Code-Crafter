import {
  editQuiz,
  createQuiz,
  getAllQuizzes,
  removeQuiz,
  quizById,
} from "../models/quizzesModels.js";

export const getQuizzes = async (req, res) => {
  try {
    const { pageNumber, pageSize, keyword } = req.query;

    const { quizData, totalCount, totalPages } = await getAllQuizzes({
      pageNumber: parseInt(pageNumber) || 1,
      pageSize: parseInt(pageSize) || 5,
      keyword,
    });

    res.status(200).json({
      success: true,
      count: quizData?.length,
      totalCount,
      totalPages,
      data: quizData,
    });
  } catch (error) {
    console.error("Error fetching quizzes:", error);
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};

export const getQuizById = async (req, res) => {
  const { id } = req.params;

  try {
    const quiz = await quizById(id);
    if (!quiz) {
      return res.status(404).json({ error: "Quiz not found" });
    }
    res.json(quiz);
  } catch (err) {
    console.log("Error fetching quiz by id: ", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const addQuiz = async (req, res) => {
  const {
    lesson_id,
    title,
    description,
    time_limit,
    thumbnail_url,
    question_count,
  } = req.body;

  try {
    if (!title || !lesson_id || !description || !time_limit) {
      return res.status(400).json({
        error: "title, lesson_id, description, time_limit are required",
      });
    }
    const newQuiz = await createQuiz({
      lesson_id,
      title,
      description,
      time_limit,
      thumbnail_url,
      question_count,
    });
    res.status(201).json(newQuiz);
  } catch (err) {
    console.log("Error creating quizzes: ", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
export const updateQuiz = async (req, res) => {
  const { id } = req.params;
  const {
    lesson_id,
    title,
    description,
    time_limit,
    thumbnail_url,
    question_count,
  } = req.body;
  try {
    const updated = await editQuiz(id, {
      lesson_id,
      title,
      description,
      time_limit,
      thumbnail_url,
      question_count,
    });

    if (!updated) {
      return res.status(404).json({ error: "quiz Not Found" });
    }

    res.json(updated);
  } catch (err) {
    console.log("Error updating quizzes: ", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const deleteQuiz = async (req, res) => {
  const { id } = req.params;
  try {
    const deleted = await removeQuiz(id);

    if (!deleted) {
      return res.status(404).json({ error: "quiz Not Found" });
    }

    res.json({ message: "quiz deleted successfully", deleted });
  } catch (err) {
    console.log("Error deleting quizzes", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
