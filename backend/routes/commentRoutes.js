import e from "express";
import {
  addComment,
  getComments,
  updateComment,
  getCommentById,
  deleteComment,
} from "../controllers/commentsController.js";

const router = e.Router();

router.get("/", getComments);
router.post("/", addComment);
router.get("/:id", getCommentById);
router.put("/:id", updateComment);
router.delete("/:id", deleteComment);

export default router;
