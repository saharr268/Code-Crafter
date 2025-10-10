import e from "express";
import {
  addLesson,
  getLessons,
  updateLesson,
  deleteLesson,
  getLessonById,
} from "../controllers/lessonsController.js";

const router = e.Router();

router.post("/", addLesson);
router.get("/", getLessons);
router.put("/:id", updateLesson);
router.get("/:id", getLessonById);
router.delete("/:id", deleteLesson);

export default router;
