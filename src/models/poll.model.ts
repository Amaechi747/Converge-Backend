import mongoose, { Schema } from "mongoose";

interface Poll {
  id: number;
  question: string;
}

interface PollOption {
  id: number;
  option: string;
  count: number;
  pollId: string;
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

const pollOptionSchema = new Schema(
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
// export const createPollTable = async () => {
//   const db = await dbPromise;
//   await db.exec(`CREATE TABLE IF NOT EXISTS polls (
//     id INTEGER PRIMARY KEY AUTOINCREMENT,
//     question TEXT
//   )`);
// };

// export const createPollOptionTable = async () => {
//   const db = await dbPromise;
//   await db.exec(`CREATE TABLE IF NOT EXISTS pollOptions (
//     id INTEGER PRIMARY KEY AUTOINCREMENT,
//     option TEXT,
//     count INTEGER,
//     pollId INTEGER,
//     FOREIGN KEY (pollId) REFERENCES polls(id)
//   )`);
// };

// export const createPoll = async (question: string) => {
//   const db = await dbPromise;
//   const result = await db.run(
//     `INSERT INTO polls (question) VALUES (?)`,
//     [question]
//   );
//   return result;
// };

// export const createPollOption = async (option: string, pollId: number) => {
//   const db = await dbPromise;
//   const result = await db.run(
//     `INSERT INTO pollOptions (option, count, pollId) VALUES (?, ?, ?)`,
//     [option, 0, pollId]
//   );
//   return result;
// };

// export const getPolls = async (): Promise<Poll[]> => {
//   const db = await dbPromise;
//   const polls = await db.all<Poll[]>(`SELECT * FROM polls`);
//   return polls;
// };

// export const getPollOptions = async (pollId: number): Promise<PollOption[]> => {
//   const db = await dbPromise;
//   const pollOptions = await db.all<PollOption[]>(`SELECT * FROM pollOptions WHERE pollId = ?`, [pollId]);
//   return pollOptions;
// };

// export const getPollsAndOptions = async (): Promise<Poll[]> => {
//     const db = await dbPromise;
//     const polls = await db.all<Poll[]>(`SELECT * FROM polls`);
//     const pollsAndOptions = await Promise.all(polls.map(async poll => {
//         const options = await getPollOptions(poll.id);
//         return {
//             ...poll,
//             options
//         };
//     }));
//     return pollsAndOptions;
// }
