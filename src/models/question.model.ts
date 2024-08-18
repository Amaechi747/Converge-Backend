//create model for questiion with field, create By, like count, question

import mongoose, { Schema } from "mongoose";

export interface Question {
    question: string;
    createdBy: string;
    likeCount: number;
    active?: boolean;
}

const questionSchema = new Schema<Question>(
    {
        question: { type: String, required: true },
        createdBy: { type: String, required: true },
        likeCount: { type: Number, required: true, default: 0 },
        active: { type: Boolean, default: true }
    },

    { timestamps: true }
);

export const QuestionModel = mongoose.model<Question>("questions", questionSchema);

export const createQuestion = async (arg: Question) => {
    const data = await QuestionModel.create(arg);
    return await data?.save();
};

//increment like count

export const incrementLike = async (id: string) => {
    const data = await QuestionModel.findByIdAndUpdate(
        id,
        { $inc: { likeCount: 1 } },
        { new: true }
    );
    return data;
}

export const getQuestions = async () => {
    const data = await QuestionModel.find().sort({ createdAt: -1 }).limit(50);
    return data;
};

