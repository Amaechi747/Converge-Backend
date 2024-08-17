import expressAsyncHandler from "express-async-handler";

export const getPolls = expressAsyncHandler(async (req, res) => {
  res.send("Hello, Polls!");
});

export const getPollsAndOptions = expressAsyncHandler(async (req, res) => {
  res.send("Polls and Options!");
});

export const createPoll = expressAsyncHandler(async (req, res) => {
  res.send("Poll created!");
});
