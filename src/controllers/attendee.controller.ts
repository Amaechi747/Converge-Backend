import expressAsyncHandler from "express-async-handler";
import { Request, Response } from "express";
import { createAttendee, getAttendees } from "../models/attendee.model";
import { UserModel } from "../models/user";

/**
 * @Middleware
 * @Body - {
 *  @string company,
 *  @string position,
 *  @string user_id,
 * }
 */
export const createAttendees = expressAsyncHandler(
  async (req: Request, res: Response) => {
    const { company, position, user_id } = req.body;
    try {
      const data = await createAttendee({ company, position, user_id });
      res.status(200).json({ message: "Attendee created", data });
    } catch {
      res.status(401).json({ message: "Failed to create attendee" });
    }
  }
);

export const getAttendee = expressAsyncHandler(
  async (req: Request, res: Response) => {
    const data = await getAttendees();
    res.status(200).json({
      message: 'Successful',
      data,
    })
  });


