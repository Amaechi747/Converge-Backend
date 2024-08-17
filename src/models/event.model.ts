import mongoose, { Schema } from "mongoose";

export interface Meet {
  title: string;
  date: Date;
  location: string;
  time: string;
}

const meetSchema = new Schema<Meet>(
  {
    title: { type: String, required: true },
    date: { type: Date, required: true },
    location: { type: String, required: true },
    time: { type: String, required: true },
  },
  { timestamps: true }
);

export const EventsModel = mongoose.model<Meet>("events", meetSchema);

export const createEvent = async (arg: Meet) => {
  const data = await EventsModel.create(arg);
  return await data?.save();
};

export const getEvents = async () => {
  const data = await EventsModel.find();
  return data;
};
