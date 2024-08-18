import { Router } from "express";
import {
    getQuestion,
    createQuestions,
    likeQuestion
} from "../controllers/question.controller";
const router = Router();

router.get("/", getQuestion);
router.post("/", createQuestions);
router.post("/like", likeQuestion);

// router.delete('/:id', deleteAttendee);

export default router;
