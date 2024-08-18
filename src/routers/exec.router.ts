import {
    createDirectors,
    createSpeakers,
    getAllDirectors
} from "../controllers/exec.controller";

import { Router } from "express";
const router = Router();

router.get("/directors", getAllDirectors);
//router.get("/", getAgenda);
router.post("/create-speaker", createSpeakers);
router.post("/create-director", createDirectors);
// router.put("/vote", voteByOptionId);
// router.delete('/:id', deleteAttendee);

export default router;