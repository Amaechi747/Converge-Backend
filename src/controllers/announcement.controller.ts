//create controllers for the announcement router

import { Request, Response } from "express";
import { createAnnouncement, getAnnouncements } from "../models/announcement.model";
import expressAsyncHandler from "express-async-handler";

export const createAnnouncements = expressAsyncHandler(async (req: Request, res: Response) => {

    const value = req.body;
    
    try {
        const data = await createAnnouncement(value);
        res.status(200).json({ message: "Attendee created", data });
    } catch {
        res.status(401).json({ message: "Failed to create attendee" });
    }
}
)

export const getAnnouncement = expressAsyncHandler(async (req: Request, res: Response) => {

    const { email } = req.body; 
    try {
        const data = await getAnnouncements(email);
        res.status(200).json({ data, message: "Successful" });
    } catch {
        res.status(401).json({ message: "Failed to create attendee" });
    }


});