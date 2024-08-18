import expressAsyncHandler from "express-async-handler";
import { Request, Response } from "express";
import { createDoc, getDocs } from "../models/documents.model"

/**
 * @Middleware
 * @Body - {
 *  @string url,
 *  @string name,
 *  @string createdBy,
 * }
 */
export const createDocs = expressAsyncHandler(
  async (req: Request, res: Response) => {
    const { url, name, createdBy } = req.body;
    try {
      const data = await createDoc({ url, name, createdBy });
      res.status(200).json({ message: 'Successful', data })
    } catch (error) {
      console.log(error);
      res.status(401).json({ message: "Failed to create attendee" });
    }
  }
);

export const getDocuments = expressAsyncHandler(
  async (req: Request, res: Response) => {
    const data = await getDocs();
    res.status(200).json({
      message: 'Successful',
      data,
    })
  }
);
