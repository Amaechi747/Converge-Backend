import mongoose, { ObjectId, Schema } from "mongoose";

interface Exec {
  bio: string;
  user_id: ObjectId;
  company: string;
  position: string;
}

const execSchema = new Schema<Exec>(
  {
    bio: { type: String, required: true },
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

export const SpeakerModel = mongoose.model<Exec>("speakers", execSchema);
export const DirectorModel = mongoose.model<Exec>("directors", execSchema);

export const createSpeaker = async (val: Exec) => {
  const data = await SpeakerModel.create(val);
  return data?.save();
};

export const createDirector = async (val: Exec) => {
  const data = await DirectorModel.create(val);
  console.log(data);
  return data?.save();
};

export const getSpeakers = async () => {
  const data = await SpeakerModel.find().populate("user_id");
  return data;
};

export const getDirectors = async () => {
  const data = await DirectorModel.find().populate("user_id");
  return data;
};
