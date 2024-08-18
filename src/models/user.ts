import mongoose, { Schema } from "mongoose";
interface User {
  id: number;
  name: string;
  email: string;
  pix: string;
  phoneNum: string;

  password: string;
  passwordChanged: boolean;
  team: string;
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

export const createManyUser = async (users: Omit<User, "id" | "passwordChanged">[]) => {
  const data = await UserModel.insertMany(users);
  return data;
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