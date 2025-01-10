import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import { EXPREE_DATA_SIZE } from "./constants.js";

const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  }),
);

app.use(
  express.json({
    limit: EXPREE_DATA_SIZE,
  }),
);
app.use(express.urlencoded({ extended: true, limit: EXPREE_DATA_SIZE }));
app.use(express.static("public"));

app.use(cookieParser());

// routes

import userRouter from "./routes/user-router.js";

app.use("/api/v1/users", userRouter);

export { app };
