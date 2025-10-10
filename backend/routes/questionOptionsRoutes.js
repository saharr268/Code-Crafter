import e from "express";
import {
  addQuestionOption,
  getQuestionOptions,
  updateQuestionOption,
  deleteQuestionOption,
  getQuestionOptionById,
} from "../controllers/questionOptionsController.js";

const router = e.Router();

router.post("/", addQuestionOption);
router.get("/", getQuestionOptions);
router.put("/:id", updateQuestionOption);
router.get("/:id", getQuestionOptionById);
router.delete("/:id", deleteQuestionOption);

export default router;
