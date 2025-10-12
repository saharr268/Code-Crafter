import e from "express";
import cors from "cors";
import { fileURLToPath } from "url";
import path, { dirname } from "path";

import faqsRoutes from "./routes/faqsRoutes.js";
import commentRoutes from "./routes/commentRoutes.js";
import quizzesRoutes from "./routes/quizzesRoutes.js";
import lessonsRoutes from "./routes/lessonsRoutes.js";
import chatBotRoutes from "./routes/chatbotFaqRoute.js";
import questionsRoutes from "./routes/questionsRoutes.js";
import fileUploadRoutes from "./routes/fileUploadRoutes.js";
import quizAttemptsRoutes from "./routes/quizAttemptsRoutes.js";
import questionOptionsRoutes from "./routes/questionOptionsRoutes.js";

const app = e();
const PORT = process.env.PORT || 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use(e.json());
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

app.use("/api/faqs", faqsRoutes);
app.use("/api/chatbot", chatBotRoutes);
app.use("/api/quizzes", quizzesRoutes);
app.use("/api/lessons", lessonsRoutes);
app.use("/api/files", fileUploadRoutes);
app.use("/api/comments", commentRoutes);
app.use("/api/questions", questionsRoutes);
app.use("/api/quiz-attempts", quizAttemptsRoutes);
app.use("/api/question-options", questionOptionsRoutes);

app.get("/", (req, res) => {
  res.send("Welcome to SEDA API");
});

app.listen(PORT, () =>
  console.log(`Server is running on http://localhost:${PORT}`)
);
