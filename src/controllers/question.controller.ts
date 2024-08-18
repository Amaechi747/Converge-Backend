import expressAsyncHandler from "express-async-handler";
import { Request, Response } from "express";
import {
    createQuestion,
    getQuestions,
    incrementLike,
} from "../models/question.model";

//create 3 controller, 1 for getting all active question, 1 for increment like count, 1 for create question


export const createQuestions = expressAsyncHandler(async (req: Request, res: Response) => {
    const value = req.body;
    try {
        const data = await createQuestion(value);
        res.status(200).json({ data, message: "Successful" });
    } catch (err: any) {
        res.status(401).json({ message: "Failed to create attendee" });
    }
})

export const getQuestion = expressAsyncHandler(async (req: Request, res: Response) => {
    try {
        const data = await getQuestions();
        res.status(200).json({ data, message: "Successful" });
    } catch (err: any) {
        res.status(401).json({ message: "Failed to create attendee" });
    }
})

export const likeQuestion = expressAsyncHandler(async (req: Request, res: Response) => {
    const { questionId } = req.body;
    const data = await incrementLike(questionId);
    res.status(200).json({
        message: "Successful",
        data
    })
})

