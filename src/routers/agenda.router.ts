import { Router } from "express";
import {
    createAnEvent,
    getAllEvents,
    createAnAgenda,
    getAgenda,
} from "../controllers/agenda.controller";
const router = Router();

router.get("/all", getAllEvents);
router.post("/", getAgenda);
router.post("/host", createAnEvent);
router.post("/create", createAnAgenda);
// router.put("/vote", voteByOptionId);
// router.delete('/:id', deleteAttendee);

export default router;
