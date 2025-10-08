import e from "express";
import {
  addFaq,
  getFaqs,
  updateFaq,
  deleteFaq,
  getFaqById,
} from "../controllers/faqsController.js";

const router = e.Router();

router.post("/", addFaq);
router.get("/", getFaqs);
router.put("/:id", updateFaq);
router.get("/:id", getFaqById);
router.delete("/:id", deleteFaq);

export default router;
