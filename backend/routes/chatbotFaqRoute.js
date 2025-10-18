import express from "express";
import {
  addChatbotFaq,
  askChatBot,
  getAllChatbotFaq,
} from "../controllers/chatbotFaqController.js";

const router = express.Router();

router.get("/", getAllChatbotFaq);
router.post("/add", addChatbotFaq);
router.post("/ask", askChatBot);

export default router;
