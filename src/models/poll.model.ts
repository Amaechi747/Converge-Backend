import mongoose, { Schema, ObjectId } from "mongoose";

interface Poll {
  id: number;
  question: string;
}

interface PollOption {
  id: number;
  option: string;
  count: number;
  pollId: ObjectId;
}

const pollSchema = new mongoose.Schema<Poll>(
  {
    question: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);
export const PollModel = mongoose.model<Poll>("poll", pollSchema);

const pollOptionSchema = new Schema<PollOption>(
  {
    option: { type: String, required: true },
    count: { type: Number, required: true, default: 0 },
    pollId: {
      type: Schema.Types.ObjectId,
      ref: PollModel,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const PollOptionModel = mongoose.model<PollOption>(
  "polloption",
  pollOptionSchema
);

export interface PollPayload {
  question: string;
  options: string[];
}

export const createPoll = async ({ question, options }: PollPayload) => {
  const poll = await PollModel.create({ question });
  const pollRes = await poll?.save();
  const response = await Promise.allSettled(
    options.map(async (opt) =>
      (
        await PollOptionModel.create({
          option: opt,
          pollId: pollRes.id,
        })
      )?.save()
    )
  );
  return { ...pollRes, response };
};

export const getPolls = async () => {
  const res = await PollModel.find();
  return res;
};

export const getPollsOptionsByPollId = async (pollId: string) => {
  const data = await PollOptionModel.find({ pollId });
  return data;
};

export const incrementOptionCount = async (optionId: string) => {
  const data = await PollOptionModel.findByIdAndUpdate(
    optionId,
    {
      $inc: { count: 1 },
    },
    { new: true }
  );

  return data;
};
