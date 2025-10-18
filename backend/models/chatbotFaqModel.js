const normalize = (s = "") =>
  s
    .toString()
    .toLowerCase()
    .replace(/[\u060C\u061B]/g, ",")
    .replace(/[\r\n]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();

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

export const getChatbotQA = async () => {
  const result = await db.query("SELECT * from chatbot_faq");
  return result.rows;
};

export const findAnswer = async ({ userMessage }) => {
  if (!userMessage || !userMessage.toString().trim()) return null;
  const lowerMessage = normalize(userMessage);

  const result = await db.query(`SELECT * FROM chatbot_faq`);
  const faqs = result.rows;

  const exactMatch = faqs.find((faq) =>
    lowerMessage.includes(normalize(faq.question))
  );
  if (exactMatch) return exactMatch;

  for (const faq of faqs) {
    if (!faq.keywords) continue;

    const keywords = faq.keywords
      .toString()
      .replace(/[\u060C\u061B]/g, ",")
      .split(/\s*,\s*/)
      .map((k) => normalize(k))
      .filter(Boolean);

    const hasKeyword = keywords.some((k) => lowerMessage.includes(k));
    if (hasKeyword) return faq;
  }

  return null;
};
