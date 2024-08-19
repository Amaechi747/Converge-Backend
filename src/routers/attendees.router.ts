import { Router } from "express";
import { getAttendee, createAttendees, createAttendeeByUserEmail } from "../controllers/attendee.controller";
const router = Router();

router.get('/', getAttendee);
router.post('/', createAttendees);
router.post('/create', createAttendeeByUserEmail);
// router.get('/:id', getAttendee);
// router.put('/:id', updateAttendee);
// router.delete('/:id', deleteAttendee);


export default router;