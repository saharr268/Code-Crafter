import e from "express";
import {
  addQuiz,
  getQuizzes,
  updateQuiz,
  deleteQuiz,
  getQuizById,
} from "../controllers/quizController.js";

const router = e.Router();

router.post("/", addQuiz);
router.get("/", getQuizzes);
router.put("/:id", updateQuiz);
router.get("/:id", getQuizById);
router.delete("/:id", deleteQuiz);

export default router;
