import dbPromise from "../database";

interface Attendee {
  id: number;
  name: string;
  company: string;
  position: string;
  email: string;
  phone: string;
  image: string;

  // team: string;
  type: "attendee" | "speaker";
}

// export const createAttendeeTable = async () => {
//   const db = await dbPromise;
//   await db.exec(`CREATE TABLE IF NOT EXISTS attendees (
//     id INTEGER PRIMARY KEY AUTOINCREMENT,
//     name TEXT NOT NULL,
//     company TEXT NOT NULL,
//     position TEXT NOT NULL,
//     email TEXT NOT NULL,
//     phone TEXT NOT NULL,
//     image TEXT NOT NULL,
//     type TEXT NOT NULL
//   )`);
// };

// export const createAttendee = async (
//   name: string,
//   company: string,
//   position: string,
//   email: string,
//   phone: string,
//   image: string,
//   type: "attendee" | "speaker"
// ) => {
//   const db = await dbPromise;
//   const result = await db.run(
//     `INSERT INTO attendees (name, company, position, email, phone, image, type) VALUES (?, ?, ?, ?, ?, ?, ?)`,
//     [name, company, position, email, phone, image, type]
//   );
//   return result;
// };

// export const getAttendees = async (): Promise<Attendee[]> => {
//   const db = await dbPromise;
//   const attendees = await db.all<Attendee[]>(`SELECT * FROM attendees`);
//   return attendees;
// };
