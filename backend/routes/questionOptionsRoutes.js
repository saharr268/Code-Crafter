import e from "express";
import {
  addQuestionOption,
  getQuestionOptions,
  updateQuestionOption,
  deleteQuestionOption,
  getQuestionOptionById,
  getOuestionOptionByQuestionId,
} from "../controllers/questionOptionsController.js";

const router = e.Router();

router.post("/", addQuestionOption);
router.get("/", getQuestionOptions);
router.put("/:id", updateQuestionOption);
router.get("/:id", getQuestionOptionById);
router.get("/question-id/:id", getOuestionOptionByQuestionId);
router.delete("/:id", deleteQuestionOption);

export default router;
