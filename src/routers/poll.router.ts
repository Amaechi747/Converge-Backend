import { Router } from "express";
import {
  getVotingPolls,
  getPollsAndOptions,
  createVotingPoll,
  voteByOptionId,
} from "../controllers/poll.controller";
const router = Router();

router.get("/", getVotingPolls);
router.get("/with-options", getPollsAndOptions);
router.post("/", createVotingPoll);
router.put("/vote", voteByOptionId);
// router.delete('/:id', deleteAttendee);

export default router;
