import e from "express";
import {
  addQuizAttempt,
  getQuizAttempts,
  updateQuizAttempt,
  deleteQuizAttempt,
  getQuizAttemptById,
  getQuizAttemptByQuizId,
} from "../controllers/quizAttemptsController.js";

const router = e.Router();

router.post("/", addQuizAttempt);
router.get("/", getQuizAttempts);
router.put("/:id", updateQuizAttempt);
router.get("/:id", getQuizAttemptById);
router.get("/quiz-id/:id", getQuizAttemptByQuizId);
router.delete("/:id", deleteQuizAttempt);

export default router;
