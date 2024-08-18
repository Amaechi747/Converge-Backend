import expressAsyncHandler from "express-async-handler";
import { Request, Response } from "express";
import { Meet, createEvent, getEvents } from "../models/event.model";
import { Agenda, createAgenda, getAgendasById } from "../models/agenda.model";
/**
 * @Middleware
 * @Body - {
 *  @string title,
 *  @string date,
 *  @string location,
 *  @string time,
 * }
 */
export const createAnEvent = expressAsyncHandler(
  async (req: Request, res: Response) => {
    const pal: Meet = req.body;
    try {
      const data = await createEvent(pal);
      res.status(200).json({ message: "Attendee created", data });
    } catch {
      res.status(401).json({ message: "Failed to create attendee" });
    }
  }
);

export const getAllEvents = expressAsyncHandler(
  async (req: Request, res: Response) => {
    try {
      const data = await getEvents();
      res.status(200).json({ data, message: "Successful" });
    } catch {
      res.status(401).json({ message: "Failed to create attendee" });
    }
  }
);

/**
 * @Middleware
 * @Body - {
 *  @string title,
 *  @string format,
 *  @string eventId,
 *  @string speakerId,
 *  @string description,
 *  @string startTime,
 *  @string endTime,
 * }
 */
export const createAnAgenda = expressAsyncHandler(
  async (req: Request, res: Response) => {
    try {
      const {
        eventId,
        speakerId,
        ...pal
      }: Agenda & { eventId: string; speakerId?: string } = req.body;
      const data = await createAgenda(pal, eventId, speakerId ? speakerId : "");
      res.status(200).json({ message: "Agenda created", data });
    } catch (err: any) {
      res.status(401).json({ message: "Failed to create agenda", error: err });
    }
  }
);

/**
 * @Middleware
 * @Body - {
 *  @string eventId,
 * }
 * */
export const getAgenda = expressAsyncHandler(
  async (req: Request, res: Response) => {
    try {
      const eventId = req.params.id;
      // const { eventId } = req.body;
      const data = await getAgendasById(eventId);
      res.status(200).json({ data, message: "Successful" });
    } catch (err: any) {
      res.status(401).json({ message: "Failed to get agendas", error: err });
    }
  }
);
