import {
  editComment,
  commentById,
  createComment,
  getAllComments,
  removeComment,
} from "../models/commentsModels.js";

export const getComments = async (req, res) => {
  try {
    const { pageNumber, pageSize, keyword } = req.query;

    const { commentData, totalCount, totalPages } = await getAllComments({
      pageNumber: parseInt(pageNumber) || 1,
      pageSize: parseInt(pageSize) || 5,
      keyword,
    });

    res.status(200).json({
      success: true,
      count: commentData?.length,
      totalCount,
      totalPages,
      data: commentData,
    });
  } catch (error) {
    console.error("Error fetching comments:", error);
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};

export const getCommentById = async (req, res) => {
  const { id } = req.params;

  try {
    const comment = await commentById(id);
    if (!comment) {
      return res.status(404).json({ error: "Comment not found" });
    }
    res.json(comment);
  } catch (err) {
    console.log("Error fetching comment by id: ", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const addComment = async (req, res) => {
  const { rate, lesson_id, is_accepted, comment_text } = req.body;

  try {
    if (!comment_text) {
      return res.status(400).json({
        error: "comment text are required",
      });
    }
    const newComment = await createComment({
      rate,
      lesson_id,
      is_accepted,
      comment_text,
    });
    res.status(201).json(newComment);
  } catch (err) {
    console.log("Error creating comments: ", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
export const updateComment = async (req, res) => {
  const { id } = req.params;
  const { rate, lesson_id, is_accepted, comment_text } = req.body;
  try {
    const updated = await editComment(id, {
      rate,
      lesson_id,
      is_accepted,
      comment_text,
    });

    if (!updated) {
      return res.status(404).json({ error: "comment Not Found" });
    }

    res.json(updated);
  } catch (err) {
    console.log("Error updating comments: ", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const deleteComment = async (req, res) => {
  const { id } = req.params;
  try {
    const deleted = await removeComment(id);

    if (!deleted) {
      return res.status(404).json({ error: "comment Not Found" });
    }

    res.json({ message: "comment deleted successfully", deleted });
  } catch (err) {
    console.log("Error deleting comments", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
