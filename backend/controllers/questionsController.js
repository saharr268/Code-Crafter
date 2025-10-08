import {
  editQuestion,
  questionById,
  createQuestion,
  getAllQuestions,
  removeQuestion,
} from "../models/questionsModels.js";

export const getQuestions = async (req, res) => {
  try {
    const { pageNumber, pageSize, keyword } = req.query;

    const { questionData, totalCount, totalPages } = await getAllQuestions({
      pageNumber: parseInt(pageNumber) || 1,
      pageSize: parseInt(pageSize) || 5,
      keyword,
    });

    res.status(200).json({
      success: true,
      count: questionData?.length,
      totalCount,
      totalPages,
      data: questionData,
    });
  } catch (error) {
    console.error("Error fetching questions:", error);
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};

export const getQuestionById = async (req, res) => {
  const { id } = req.params;

  try {
    const question = await questionById(id);
    if (!question) {
      return res.status(404).json({ error: "Question not found" });
    }
    res.json(question);
  } catch (err) {
    console.log("Error fetching question by id: ", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const addQuestion = async (req, res) => {
  const { question_id, option_text, is_correct } = req.body;

  try {
    if (!question_text) {
      return res.status(400).json({
        error: "question text are required",
      });
    }
    const newQuestion = await createQuestion({
      quiz_id,
      question_text,
      question_type,
      created_at,
      correct_answer,
    });
    res.status(201).json(newQuestion);
  } catch (err) {
    console.log("Error creating questions: ", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
export const updateQuestion = async (req, res) => {
  const { id } = req.params;
  const { question_id, option_text, is_correct } = req.body;
  try {
    const updated = await editQuestion(id, {
      quiz_id,
      question_text,
      question_type,
      created_at,
      correct_answer,
    });

    if (!updated) {
      return res.status(404).json({ error: "question Not Found" });
    }

    res.json(updated);
  } catch (err) {
    console.log("Error updating questions: ", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const deleteQuestion = async (req, res) => {
  const { id } = req.params;
  try {
    const deleted = await removeQuestion(id);

    if (!deleted) {
      return res.status(404).json({ error: "question Not Found" });
    }

    res.json({ message: "question deleted successfully", deleted });
  } catch (err) {
    console.log("Error deleting questions", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
