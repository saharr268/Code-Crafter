import {
  editQuizAttempt,
  quizAttemptById,
  createQuizAttempt,
  getAllQuizAttempts,
  removeQuizAttempt,
} from "../models/quizAttemptsModels.js";

export const getQuizAttempts = async (req, res) => {
  try {
    const { pageNumber, pageSize, keyword } = req.query;

    const { quiz_attemptData, totalCount, totalPages } =
      await getAllQuizAttempts({
        pageNumber: parseInt(pageNumber) || 1,
        pageSize: parseInt(pageSize) || 5,
        keyword,
      });

    res.status(200).json({
      success: true,
      count: quiz_attemptData?.length,
      totalCount,
      totalPages,
      data: quiz_attemptData,
    });
  } catch (error) {
    console.error("Error fetching quiz_attempts:", error);
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};

export const getQuizAttemptById = async (req, res) => {
  const { id } = req.params;

  try {
    const quiz_attempt = await quizAttemptById(id);
    if (!quiz_attempt) {
      return res.status(404).json({ error: "QuizAttempt not found" });
    }
    res.json(quiz_attempt);
  } catch (err) {
    console.log("Error fetching quiz_attempt by id: ", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const addQuizAttempt = async (req, res) => {
  const {
    quiz_id,
    quiz_attempt_text,
    quiz_attempt_type,
    created_at,
    correct_answer,
  } = req.body;

  try {
    if (!quiz_attempt_text) {
      return res.status(400).json({
        error: "quiz_attempt text are required",
      });
    }
    const newQuizAttempt = await createQuizAttempt({
      quiz_id,
      quiz_attempt_text,
      quiz_attempt_type,
      created_at,
      correct_answer,
    });
    res.status(201).json(newQuizAttempt);
  } catch (err) {
    console.log("Error creating quiz_attempts: ", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
export const updateQuizAttempt = async (req, res) => {
  const { id } = req.params;
  const {
    quiz_id,
    quiz_attempt_text,
    quiz_attempt_type,
    created_at,
    correct_answer,
  } = req.body;
  try {
    const updated = await editQuizAttempt(id, {
      quiz_id,
      quiz_attempt_text,
      quiz_attempt_type,
      created_at,
      correct_answer,
    });

    if (!updated) {
      return res.status(404).json({ error: "quiz_attempt Not Found" });
    }

    res.json(updated);
  } catch (err) {
    console.log("Error updating quiz_attempts: ", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const deleteQuizAttempt = async (req, res) => {
  const { id } = req.params;
  try {
    const deleted = await removeQuizAttempt(id);

    if (!deleted) {
      return res.status(404).json({ error: "quiz_attempt Not Found" });
    }

    res.json({ message: "quiz_attempt deleted successfully", deleted });
  } catch (err) {
    console.log("Error deleting quiz_attempts", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
