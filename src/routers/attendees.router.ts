import { Router } from "express";
import { getAttendee, createAttendees } from "../controllers/attendee.controller";
const router = Router();

router.get('/', getAttendee);
router.post('/', createAttendees);
// router.get('/:id', getAttendee);
// router.put('/:id', updateAttendee);
// router.delete('/:id', deleteAttendee);


export default router;