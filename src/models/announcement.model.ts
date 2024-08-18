//create announcement model with filed like tile, description, date, time, location

import mongoose, { Schema } from "mongoose";

export interface Announcement {
    title: string;
    description: string;
    location: string;
}

const announcementSchema = new Schema<Announcement>(
    {
        title: { type: String, required: true },
        description: { type: String, required: true },
        location: { type: String, required: false },
    },
    { timestamps: true }
);

export const AnnouncementModel = mongoose.model<Announcement>("announcements", announcementSchema);

export const createAnnouncement = async (arg: Announcement) => {
    const data = await AnnouncementModel.create(arg);
    return await data?.save();
};

export const getAnnouncements = async () => {
    console.log("getAnnouncements");
    const data = await AnnouncementModel.find();
    return data;
};