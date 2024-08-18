import expressAsyncHandler from "express-async-handler";
import { Request, Response } from "express";
import {
  createSpeaker,
  createDirector,
  getSpeakers,
  getDirectors,
} from "../models/exec.model";

/**
 * @Middleware
 * @Body - {
 *  @string bio,
 *  @string user_id,
 * }
 */
export const createDirectors = expressAsyncHandler(
  async (req: Request, res: Response) => {
    try {
      const dat = req.body;
      const data = await createDirector(dat);
      res.status(200).json({ data, message: "Successful" });
    } catch (e) {
      console.log(e);
      res.status(401).json({ message: "Failed to create attendee" });
    }
  }
);

/**
 * @Middleware
 * @Body - {
 *  @string bio,
 *  @string user_id,
 * }
 */
export const createSpeakers = expressAsyncHandler(
  async (req: Request, res: Response) => {
    try {
      const dat = req.body;
      const data = await createSpeaker(dat);
      res.status(200).json({ data, message: "Successful" });
    } catch {
      res.status(401).json({ message: "Failed to create attendee" });
    }
  }
);

export const getAllDirectors = expressAsyncHandler(
  async (req: Request, res: Response) => {
    const data = await getDirectors();
    res.status(200).json({ data, message: "Successful" });
  }
);

export const getAllSpeakers = expressAsyncHandler(
  async (req: Request, res: Response) => {
    const data = await getSpeakers();
    res.status(200).json({ data, message: "Successful" });
  }
);
