import dbPromise from '../database';

interface User {
  id: number;
  name: string;
  email: string;
}

export const createUserTable = async () => {
  const db = await dbPromise;
  await db.exec(`CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    email TEXT
  )`);
};

export const createUser = async (name: string, email: string) => {
  const db = await dbPromise;
  const result = await db.run(
    `INSERT INTO users (name, email) VALUES (?, ?)`,
    [name, email]
  );
  return result;
};

export const getUsers = async (): Promise<User[]> => {
  const db = await dbPromise;
  const users = await db.all<User[]>(`SELECT * FROM users`);
  return users;
};