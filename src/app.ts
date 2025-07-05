import express, { Application, Request, Response } from "express";

import bookRoutes from "./app/controllers/book.controller";
import borrowRoutes from "./app/controllers/borrow.controller";
import errorHandler from "./app/middlewares/errorHandler";

import cors from "cors";

const app: Application = express();

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://library-management-client-kappa.vercel.app",
    ],
    credentials: true,
  })
);

app.use(express.json());

app.use("/api/books", bookRoutes);
app.use("/api/borrow", borrowRoutes);

app.use(errorHandler);

app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to Library Management Backend!!");
});

export default app;
