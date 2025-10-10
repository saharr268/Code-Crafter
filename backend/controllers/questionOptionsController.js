import {
  editQuestionOption,
  question_optionById,
  createQuestionOption,
  getAllQuestionOptions,
  removeQuestionOption,
} from "../models/questionOptionsModels.js";

export const getQuestionOptions = async (req, res) => {
  try {
    const { pageNumber, pageSize, keyword } = req.query;

    const { question_optionData, totalCount, totalPages } =
      await getAllQuestionOptions({
        pageNumber: parseInt(pageNumber) || 1,
        pageSize: parseInt(pageSize) || 5,
        keyword,
      });

    res.status(200).json({
      success: true,
      count: question_optionData?.length,
      totalCount,
      totalPages,
      data: question_optionData,
    });
  } catch (error) {
    console.error("Error fetching question_options:", error);
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};

export const getQuestionOptionById = async (req, res) => {
  const { id } = req.params;

  try {
    const question_option = await question_optionById(id);
    if (!question_option) {
      return res.status(404).json({ error: "QuestionOption not found" });
    }
    res.json(question_option);
  } catch (err) {
    console.log("Error fetching question_option by id: ", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const addQuestionOption = async (req, res) => {
  const { question_id, option_text, is_correct } = req.body;

  try {
    if (!option_text) {
      return res.status(400).json({
        error: "option_text are required",
      });
    }
    const newQuestionOption = await createQuestionOption({
      question_id,
      option_text,
      is_correct,
    });
    res.status(201).json(newQuestionOption);
  } catch (err) {
    console.log("Error creating question_options: ", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
export const updateQuestionOption = async (req, res) => {
  const { id } = req.params;
  const { question_id, option_text, is_correct } = req.body;
  try {
    const updated = await editQuestionOption(id, {
      question_id,
      option_text,
      is_correct,
    });

    if (!updated) {
      return res.status(404).json({ error: "question_option Not Found" });
    }

    res.json(updated);
  } catch (err) {
    console.log("Error updating question_options: ", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const deleteQuestionOption = async (req, res) => {
  const { id } = req.params;
  try {
    const deleted = await removeQuestionOption(id);

    if (!deleted) {
      return res.status(404).json({ error: "question_option Not Found" });
    }

    res.json({ message: "question_option deleted successfully", deleted });
  } catch (err) {
    console.log("Error deleting question_options", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
