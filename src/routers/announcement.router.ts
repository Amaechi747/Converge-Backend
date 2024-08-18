import { Router } from "express";
import {
    createAnnouncements,
    getAnnouncement,
} from "../controllers/announcement.controller";

const router = Router();

router.post("/", getAnnouncement);
// router.get("/", getAnnouncement);
router.post("/create", createAnnouncements);


export default router;
