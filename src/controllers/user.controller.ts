import expressAsyncHandler from "express-async-handler";
import { Request, Response } from "express";
import { changeUserPassword, createUser, getUserByEmail } from "../models/user";

/**
 * @Middleware
 * @Body - {
 *  @string name,
 *  @string password,
 *  @string email,
 *  @string phoneNum,
 *  @string team,
 *  @string pix
 * }
 */
export const createUserController = expressAsyncHandler(
  async (req: Request, res: Response) => {
    const { name, password, email, passwordChanged, phoneNum, team, pix } =
      req.body;
    try {
      const response = await createUser({
        name,
        email,
        password,
        phoneNum,
        team,
        pix,
      });
      res
        .status(201)
        .json({ message: "User created successfully", data: response });
    } catch (error) {
      console.log(error);
      res.json({
        error,
      });
    }
  }
);

/**
 * @Middleware
 * @Body - {
 *  @string email,
 *  @string password,
 * }
 */
export const loginUserController = expressAsyncHandler(
  async (req: Request, res: Response) => {
    const { email, password } = req.body;
    try {
      const user = await getUserByEmail(email);
      if (user && user.password === password) {
        res.json({ message: "Login successful", data: user });
      } else {
        res.status(401).json({ message: "Invalid password" });
      }
    } catch {
      res.status(401).json({ message: "Invalid email" });
    }
  }
);

/**
 * @Middleware
 * @Body - {
 *  @string email,
 *  @string password,
 * }
 */
export const changeUsersPassword = expressAsyncHandler(
  async (req: Request, res: Response) => {
    const { email, password } = req.body;
    try {
      const user = await changeUserPassword(email, password);
      if (user) {
        // user.password = password;
        // await user.save();
        res.json({ message: "Password changed successfully", data: user });
      } else {
        res.status(404).json({ message: "User has already changed password" });
      }
    } catch {
      res.status(401).json({ message: "Invalid email" });
    }
  }
);
