// import sqlite3 from "sqlite3";
import { open } from "sqlite";
import { resolve } from "path";
import { mkdirSync } from "fs";
import { dirname } from "path";

const dbPath = resolve(__dirname, "/database/mydb.sqlite");

const sqlite3 = require('sqlite3').verbose();

// open database in memory
// let db = new sqlite3.Database(':memory:', (err: any) => {
//   if (err) {
//     return console.error(err?.message);
//   }
//   console.log('Connected to the in-memory SQlite database.');
// });

// close the database connection
// db.close((err: any) => {
//   if (err) {
//     return console.error(err.message);
//   }
//   console.log('Close the database connection.');
// });

// Ensure the directory exists
mkdirSync(dirname(dbPath), { recursive: true });

const dbPromise = open({
  filename: dbPath,
  driver: sqlite3.Database,
});

export default dbPromise;
