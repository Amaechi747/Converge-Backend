import { Router } from "express";
import {
  changeUsersPassword,
  createUserController,
  loginUserController,
} from "../controllers/user.controller";
const router = Router();

router.post('/create', createUserController);
router.post('/login', loginUserController);
router.post('/change-pass', changeUsersPassword);
// router.put('/:id', updateAttendee);
// router.delete('/:id', deleteAttendee);

export default router;
