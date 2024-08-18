//create announcement model with filed like tile, description, date, time, location

import mongoose, { Schema } from "mongoose";

export interface Announcement {
    title: string;
    description: string;
    location: string;
    recipient?: string;
}

const announcementSchema = new Schema<Announcement>(
    {
        title: { type: String, required: true },
        description: { type: String, required: true },
        location: { type: String, required: false },
        recipient: { type: String, required: false, default: "all" },
    },
    { timestamps: true }
);

export const AnnouncementModel = mongoose.model<Announcement>("announcements", announcementSchema);

export const createAnnouncement = async (arg: Announcement) => {
    const data = await AnnouncementModel.create(arg);
    return await data?.save();
};

// export const getAnnouncements = async () => {
//     const data = await AnnouncementModel.find();
//     return data;
// };

export const getAnnouncements = async (email: string) => {
    // const data = await AnnouncementModel.find({ recipient: { $eq: email } });
    console.log('emai', email)
    const data = await AnnouncementModel.find({
        $or: [
            { recipient: email },
            // { recipient: { $ne: email } }, 
            { recipient: 'all' },
        ]
    }).sort({createdAt: -1});
    return data;
};