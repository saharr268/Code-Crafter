import { addChatbotQA, findAnswer } from "../models/chatbotFaqModel.js";

export const askChatBot = async (req, res) => {
  try {
    const { message } = req.body;
    const result = await findAnswer({ userMessage: message });

    if (result) {
      res.json({ answer: result.answer });
    } else {
      res.json({ answer: "Hmm, I don't know that one yet!" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
};

export const addChatbotFaq = async (req, res) => {
  try {
    const { question, answer, keywords } = req.body;
    const newQA = await addChatbotQA({ question, answer, keywords });
    res.status(201).json(newQA);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to add Q&A" });
  }
};
