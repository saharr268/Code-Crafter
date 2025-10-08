import e from "express";
import {
  addQuestionOption,
  getQuestionOptions,
  updateQuestionOption,
  deleteQuestionOption,
  getQuestionOptionById,
} from "../controllers/questionOptionsController.js";

const router = e.Router();

router.get("/", addQuestionOption);
router.post("/", getQuestionOptions);
router.get("/:id", updateQuestionOption);
router.put("/:id", getQuestionOptionById);
router.delete("/:id", deleteQuestionOption);

export default router;
