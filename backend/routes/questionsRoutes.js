import e from "express";
import {
  addQuestion,
  getQuestions,
  updateQuestion,
  deleteQuestion,
  getQuestionById,
} from "../controllers/questionsController.js";

const router = e.Router();

router.post("/", addQuestion);
router.get("/", getQuestions);
router.put("/:id", updateQuestion);
router.get("/:id", getQuestionById);
router.delete("/:id", deleteQuestion);

export default router;
