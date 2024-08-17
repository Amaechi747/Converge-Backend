import mongoose, { ObjectId, Schema } from "mongoose";

interface Attendee {
  id: number;
  company: string;
  position: string;
  user_id: ObjectId;
}

const attendeeSchema = new Schema<Attendee>(
  {
    company: { type: String, required: true },
    position: { type: String, required: true },
    user_id: {
      type: Schema.Types.ObjectId,
      ref: "cuser",
      required: true,
      unique: true,
    },
  },
  {
    timestamps: true,
  }
);

export const AttendeeModel = mongoose.model<Attendee>("attens", attendeeSchema);

export const createAttendee = async (attendee: Omit<Attendee, "id">) => {
  const data = await AttendeeModel.create(attendee);
  return data?.save();
};

export const getAttendees = async () => {
  const data = await AttendeeModel.find().populate("user_id");
  return data;
};
