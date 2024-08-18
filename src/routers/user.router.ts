import { Router } from "express";
import {
  changeUsersPassword,
  createManyUserController,
  createUserController,
  loginUserController,
} from "../controllers/user.controller";
const router = Router();

router.post('/create', createUserController);
router.post('/createMany', createManyUserController);
router.post('/login', loginUserController);
router.post('/change-pass', changeUsersPassword);


// router.put('/:id', updateAttendee);
// router.delete('/:id', deleteAttendee);

export default router;
