import mongoose, { Schema } from "mongoose";

interface Documents {
  id: number;
  url: string;
  name: string;
  createdBy: string;
}

const documentSchema = new Schema<Documents>(
  {
    url: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    createdBy: { type: String, required: true },
  },
  { timestamps: true }
);

const DocModel = mongoose.model<Documents>("cdocs", documentSchema);

export const createDoc = async (arg: Omit<Documents, 'id'>) => {
  const data = await DocModel.create(arg);
  return data?.save()
}

export const getDocs = async () => {
  const data = await DocModel.find();
  return data;
}