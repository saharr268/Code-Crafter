import e from "express";
import cors from "cors";
import { fileURLToPath } from "url";
import path, { dirname } from "path";

import commentRoutes from "./routes/commentRoutes.js";
import faqsRoutes from "./routes/faqsRoutes.js";
import lessonsRoutes from "./routes/lessonsRoutes.js";
import questionsRoutes from "./routes/questionsRoutes.js";
import questionOptionsRoutes from "./routes/questionOptionsRoutes.js";
import quizzesRoutes from "./routes/quizzesRoutes.js";
import quizAttemptsRoutes from "./routes/quizAttemptsRoutes.js";

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

// app.use("/api", fileRoutes);
app.use("/api/comments", commentRoutes);
app.use("/api/faqs", faqsRoutes);
app.use("/api/lessons", lessonsRoutes);
app.use("/api/questions", questionsRoutes);
app.use("/api/question-options", questionOptionsRoutes);
app.use("/api/quizzes", quizzesRoutes);
app.use("/api/quiz-attempts", quizAttemptsRoutes);
// app.use("/api/chat", );

app.get("/", (req, res) => {
  res.send("Welcome to SEDA API");
});

app.listen(PORT, () =>
  console.log(`Server is running on http://localhost:${PORT}`)
);
