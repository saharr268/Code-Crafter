import e from "express";
import {
  addQuizAttempt,
  getQuizAttempts,
  updateQuizAttempt,
  deleteQuizAttempt,
  getQuizAttemptById,
} from "../controllers/quizAttemptsController.js";

const router = e.Router();

router.post("/", addQuizAttempt);
router.get("/", getQuizAttempts);
router.put("/:id", updateQuizAttempt);
router.get("/:id", getQuizAttemptById);
router.delete("/:id", deleteQuizAttempt);

export default router;
