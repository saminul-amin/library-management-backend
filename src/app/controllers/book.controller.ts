import express, { Request, Response, NextFunction } from "express";
import { Book } from "../models/book.model";

const bookRoutes = express.Router();

bookRoutes.post(
  "/",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const book = await Book.create(req.body);
      res.status(200).json({
        success: true,
        message: "Book created successfully",
        data: book,
      });
    } catch (err) {
      next(err);
    }
  }
);

bookRoutes.get("/", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const {
      filter,
      sortBy = "createdAt",
      sort = "asc",
      limit = 10,
    } = req.query;
    const books = await Book.find(filter ? { genre: filter } : {})
      .sort({ [sortBy as string]: sort === "desc" ? -1 : 1 })
      .limit(Number(limit));

    res.status(200).json({
      success: true,
      message: "Books retrieved successfully",
      data: books,
    });
  } catch (err) {
    next(err);
  }
});

bookRoutes.get(
  "/:bookId",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const book = await Book.findById(req.params.bookId);
      res.status(200).json({
        success: true,
        message: "Book retrieved successfully",
        data: book,
      });
    } catch (err) {
      next(err);
    }
  }
);

bookRoutes.put(
  "/:bookId",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const book = await Book.findByIdAndUpdate(req.params.bookId, req.body, {
        new: true,
      });
      res.status(200).json({
        success: true,
        message: "Book updated successfully",
        data: book,
      });
    } catch (err) {
      next(err);
    }
  }
);

bookRoutes.delete(
  "/:bookId",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      await Book.findByIdAndDelete(req.params.bookId);
      res.status(200).json({
        success: true,
        message: "Book deleted successfully",
        data: null,
      });
    } catch (err) {
      next(err);
    }
  }
);

export default bookRoutes;
