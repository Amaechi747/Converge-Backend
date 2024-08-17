import dbPromise from "../database";

interface Attendee {
  id: number;
  name: string;
  email: string;
  team: string;
  pix: string;
  phoneNum: string;
  type: "attendee" | "speaker";
}

export const createAttendeeTable = async () => {
  const db = await dbPromise;
  await db.exec(`CREATE TABLE IF NOT EXISTS attendees (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    email TEXT,
    team TEXT,
    pix TEXT,
    phoneNum TEXT
  )`);
};

export const createAttendee = async (
  name: string,
  email: string,
  team: string,
  pix: string,
  phoneNum: string
) => {
  const db = await dbPromise;
  const result = await db.run(
    `INSERT INTO attendees (name, email, team, pix, phoneNum) VALUES (?, ?, ?, ?, ?)`,
    [name, email, team, pix, phoneNum]
  );
  return result;
};

export const getAttendees = async (): Promise<Attendee[]> => {
  const db = await dbPromise;
  const attendees = await db.all<Attendee[]>(`SELECT * FROM attendees`);
  return attendees;
};
