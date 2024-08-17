import mongoose, { Schema } from "mongoose";
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

const userSchema = new Schema<User>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    passwordChanged: { type: Boolean, required: true, default: false },
    phoneNum: { type: String, required: true },
    team: { type: String, required: true },
    pix: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

export const UserModel = mongoose.model<User>("cuser", userSchema);

export const createUser = async (user: Omit<User, "id" | "passwordChanged">) => {
  const data = await UserModel.create(user);
  return data?.save();
};

export const getUsers = async () => {
  const data = await UserModel.find();
  return data;
};

export const getUserById = async (id: string) => {
  const data = await UserModel.findById(id);
  return data;
};

export const getUserByEmail = async (email: string) => {
  const data = await UserModel.findOne({ email });
  return data;
};

export const changeUserPassword = async (email: string, newPass: string) => {
  const data = await UserModel.findOne({ email });
  if (data && data.passwordChanged === false) {
    data.password = newPass;
    data.passwordChanged = true;
    return await data.save();
  } else return null;
};
// export const createUserTable = async () => {
//   const db = await dbPromise;
//   await db.exec(`CREATE TABLE IF NOT EXISTS users (
//     id INTEGER PRIMARY KEY AUTOINCREMENT,
//     name TEXT NOT NULL,
//     email TEXT NOT NULL,
//     passwordChanged TEXT NOT NULL,
//     password TEXT NOT NULL,
//     phoneNum TEXT NOT NULL,
//     team TEXT NOT NULL,
//     pix TEXT NOT NULL
//   )`);
// };

// export const createUser = async (
//     name: string,
//     email: string,
//     passwordChanged: boolean,
//     password: string,
//     phoneNum: string,
//     team: string,
//     pix: string
//     ) => {
//   const db = await dbPromise;
//   const result = await db.run(
//     `INSERT INTO users (name, email, passwordChanged, password, phoneNum, team, pix) VALUES (?, ?, ?, ?, ?, ?, ?)`,
//     [name, email, passwordChanged, password, phoneNum, team, pix]
//   );
//   return result;
// };

// export const getUsers = async (): Promise<User[]> => {
//   const db = await dbPromise;
//   const users = await db.all<User[]>(`SELECT * FROM users`);
//   return users;
// };
