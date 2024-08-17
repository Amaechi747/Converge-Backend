import express, { NextFunction, Request, Response } from "express";
import mongoose from "mongoose";
import 'dotenv/config';
import logger from 'morgan';
import userRouter from './routers/user.router';

import createError, { HttpError, } from "http-errors";
import { createUserController } from "./controllers/user.controller";
// import { createUserTable } from "./models/user";

const app = express();
const PORT = process.env.PORT || 3000;


/**
 * Connect the Database
 */
mongoose
  .connect(process.env.DB_CONNECT ?? '')
  .then(() => console.log("Database Connected"))
  .catch(() => {
    console.log("Database Failed to connect");
  });

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(logger('dev'));


/**
 * Middleware
 * @body - { name, password, email, passwordChanged, phoneNum, team, pix }
 */
app.use("/user", userRouter);


// catch 404 and forward to error handler
app.use(function (req: Request, res: Response, next: NextFunction) {
  next(createError(404, 'This page is not found'));
});

// error handler
app.use(function (err: HttpError, req: Request, res: Response, next: NextFunction) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.send({ error: err.message });
});


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
