import dbPromise from '../database';

interface User {
  id: number;
  name: string;
  email: string;
  password: string;
  passwordChanged: boolean;
  phoneNum: string;
  team: string;
  pix: string;
}

export const createUserTable = async () => {
  const db = await dbPromise;
  await db.exec(`CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    email TEXT,
    passwordChanged BOOLEAN,
    password TEXT,
    phoneNum TEXT,
    team TEXT,
    pix TEXT
  )`);
};

export const createUser = async (name: string, 
    email: string, 
    passwordChanged: boolean, 
    password: string, 
    phoneNum: string, 
    team: string, 
    pix: string
    ) => {
  const db = await dbPromise;
  const result = await db.run(
    `INSERT INTO users (name, email, passwordChanged, password, phoneNum, team, pix) VALUES (?, ?)`,
    [name, email, passwordChanged, password, phoneNum, team, pix]
  );
  return result;
};

export const getUsers = async (): Promise<User[]> => {
  const db = await dbPromise;
  const users = await db.all<User[]>(`SELECT * FROM users`);
  return users;
};