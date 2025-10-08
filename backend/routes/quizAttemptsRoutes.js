import e from "express";
import {
  addQuizAttempt,
  getQuizAttempts,
  updateQuizAttempt,
  deleteQuizAttempt,
  getQuizAttemptById,
} from "../controllers/quizAttemptsController.js";

const router = e.Router();

router.get("/", addQuizAttempt);
router.post("/", getQuizAttempts);
router.get("/:id", updateQuizAttempt);
router.put("/:id", getQuizAttemptById);
router.delete("/:id", deleteQuizAttempt);

export default router;
