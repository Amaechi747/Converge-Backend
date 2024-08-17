import { Router } from "express";
import { createDocs, getDocuments } from "../controllers/documents.controller";
const router = Router();

// router.get('/:id', getAttendee);
router.get('/', getDocuments);
router.post('/', createDocs);
// router.put('/:id', updateAttendee);
// router.delete('/:id', deleteAttendee);


export default router;