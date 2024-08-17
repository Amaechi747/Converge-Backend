import mongoose, { Schema, ObjectId } from "mongoose";

export interface Agenda {
  title: string;
  format: string;
  eventId: ObjectId;
  speakerId: ObjectId;
  description: string;
  startTime: Date;
  endTime: Date;
}

const agendaSchema = new Schema<Agenda>(
  {
    title: { type: String, required: true },
    format: { type: String },
    eventId: { type: Schema.Types.ObjectId, ref: "events", required: true },
    speakerId: { type: Schema.Types.ObjectId, ref: "speakers" },
    description: { type: String },
    startTime: { type: Date, required: true },
    endTime: { type: Date, required: true },
  },
  {
    timestamps: true,
  }
);

export const AgendaModel = mongoose.model<Agenda>("agenda", agendaSchema);

export const createAgenda = async (
  args: Omit<Agenda, "eventId" | "speakerId">,
  eventId: string,
  speakerId?: string
) => {
  const data = await AgendaModel.create({ ...args, eventId, speakerId });
  return await data?.save();
};

export const getAgendasById = async (eventId: string) => {
    const data = await AgendaModel.find({ eventId }).populate({
      path: 'speakerId',
      populate: {
        path: 'user_id',
        model: 'cuser'
      }
    }).exec();
    return data;
}
