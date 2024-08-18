import expressAsyncHandler from "express-async-handler";
import { Request, Response } from "express";
import {
  createPoll,
  getPolls,
  getPollsOptionsByPollId,
  incrementOptionCount,
  PollPayload,
  getOptions
} from "../models/poll.model";

export const getVotingPolls = expressAsyncHandler(
  async (req: Request, res: Response) => {
    const polls = await getPolls();
    res.status(200).json({ polls });
  }
);

export const getPollsAndOptions = expressAsyncHandler(
  async (req: Request, res: Response) => {
    const polls = await getPolls();
    const response = await getOptions();
    res.status(200).json({ polls, options: response });
  }
);


/**
 * @Middleware
 * @Body - {
 *  @string company,
 *  @array @string options,
 * }
 */
export const createVotingPoll = expressAsyncHandler(
  async (req: Request, res: Response) => {
    const { question, options } = req.body as PollPayload;
    try {
      const data = await createPoll({ question, options });
      res.status(200).json({ data, message: "Successful" });
    } catch (err: any) {
      res.status(401).json({ message: "Failed to create attendee" });
    }
  }
);


/**
 * @Middleware
 * @Body - {
 *  @string optionId,
 * }
 */
export const voteByOptionId = expressAsyncHandler(
  async (req: Request, res: Response) => {
    const { optionId } = req.body;
    const data = await incrementOptionCount(optionId);
    res.status(200).json({
      message: "Successful",
      data
    })
  }
)
