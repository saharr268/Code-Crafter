import e from "express";
import {
  addQuestion,
  getQuestions,
  updateQuestion,
  deleteQuestion,
  getQuestionById,
} from "../controllers/questionsController.js";

const router = e.Router();

router.get("/", addQuestion);
router.post("/", getQuestions);
router.get("/:id", updateQuestion);
router.put("/:id", getQuestionById);
router.delete("/:id", deleteQuestion);

export default router;
