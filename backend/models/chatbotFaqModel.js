import db from "../configs/db.js";

export const addChatbotQA = async ({ question, answer, keywords }) => {
  const result = await db.query(
    `INSERT INTO chatbot_faq (question, answer, keywords)
     VALUES ($1, $2, $3)
     RETURNING *`,
    [question, answer, keywords]
  );
  return result.rows[0];
};

export const findAnswer = async ({ userMessage }) => {
  const lowerMessage = userMessage.toLowerCase();

  const result = await db.query(`SELECT * FROM chatbot_faq`);
  const faqs = result.rows;

  const exactMatch = faqs.find((faq) =>
    lowerMessage.includes(faq.question.toLowerCase())
  );
  if (exactMatch) return exactMatch;

  for (const faq of faqs) {
    if (!faq.keywords) continue;
    const keywords = faq.keywords
      .toLowerCase()
      .split(",")
      .map((k) => k.trim());
    const hasKeyword = keywords.some((k) => lowerMessage.includes(k));
    if (hasKeyword) return faq;
  }

  return null;
};
