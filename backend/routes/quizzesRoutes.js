import e from "express";
import {
  addQuiz,
  getQuizzes,
  updateQuiz,
  deleteQuiz,
  getQuizById,
  getQuizByLessonId,
} from "../controllers/quizController.js";

const router = e.Router();

router.post("/", addQuiz);
router.get("/", getQuizzes);
router.put("/:id", updateQuiz);
router.get("/:id", getQuizById);
router.get("/lesson-id/:id", getQuizByLessonId);
router.delete("/:id", deleteQuiz);

export default router;
