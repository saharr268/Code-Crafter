import express from "express";
import {
  addChatbotFaq,
  askChatBot,
} from "../controllers/chatbotFaqController.js";

const router = express.Router();

router.post("/ask", askChatBot);
router.post("/add", addChatbotFaq);

export default router;
