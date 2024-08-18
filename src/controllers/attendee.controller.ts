import expressAsyncHandler from "express-async-handler";
import { Request, Response } from "express";
import { createAttendee, getAttendees } from "../models/attendee.model";
<<<<<<< HEAD
import { UserModel } from "../models/user";
=======
import { getUserByEmail } from "../models/user";

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

<<<<<<< HEAD
=======
export const createAttendeeByUserEmail = expressAsyncHandler(
  async (req: Request, res: Response) => {
    const { attendees } = req.body;
    try {
      const data = await Promise.all(
        attendees.map(async (attendee: any) => {
          const { company, position, email } = attendee;
          const user = await getUserByEmail(email);
          if (!user) {
            return { message: "User not found" };
          }
          return await createAttendee({ company, position, user_id: user.id });
        })
      );
      res.status(200).json({ message: "Attendee created", data });
    } catch {
      res.status(401).json({ message: "Failed to create attendee" });
    }
  }
);

>>>>>>> c314a1a0974f1be934924bf649eed7589b0f40b7
export const getAttendee = expressAsyncHandler(
  async (req: Request, res: Response) => {
    const data = await getAttendees();
    res.status(200).json({
<<<<<<< HEAD
      message: 'Successful',
      data,
    })
  });


=======
      message: "Successful",
      data,
    });
  }
);
>>>>>>> c314a1a0974f1be934924bf649eed7589b0f40b7
