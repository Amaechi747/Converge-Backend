import dbPromise from "../database";

interface Document {
  id: number;
  url: string;
  name: string;
  createdBy: string;
}

export const createDocumentTable = async () => {
  const db = await dbPromise;
  await db.exec(`CREATE TABLE IF NOT EXISTS documents (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    url TEXT,
    name TEXT,
    createdBy TEXT
  )`);
};

export const createDocument = async (
  url: string,
  name: string,
  createdBy: string
) => {
  const db = await dbPromise;
  const result = await db.run(
    `INSERT INTO documents (url, name, createdBy) VALUES (?, ?, ?)`,
    [url, name, createdBy]
  );
  return result;
};

export const getDocuments = async (): Promise<Document[]> => {
  const db = await dbPromise;
  const documents = await db.all<Document[]>(`SELECT * FROM documents`);
  return documents;
};