import express, { NextFunction, Request, Response } from "express";
import { Borrow } from "../models/borrow.model";
import { Book } from "../models/book.model";

const borrowRoutes = express.Router();

borrowRoutes.post(
  "/",
  async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const { book: bookId, quantity } = req.body;
      const book = await Book.findById(bookId);
      if (!book || book.copies < quantity) {
        res.status(400).json({
          success: false,
          message: "Not enough copies available",
          error: "Insufficient copies",
        });
        return;
      }

      const borrow = await Borrow.create(req.body);
      res.status(200).json({
        success: true,
        message: "Book borrowed successfully",
        data: borrow,
      });
    } catch (err) {
      next(err);
    }
  }
);

borrowRoutes.get(
  "/",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const summary = await Borrow.aggregate([
        {
          $group: {
            _id: "$book",
            totalQuantity: { $sum: "$quantity" },
          },
        },
        {
          $lookup: {
            from: "books",
            localField: "_id",
            foreignField: "_id",
            as: "book",
          },
        },
        {
          $unwind: "$book",
        },
        {
          $project: {
            book: { title: "$book.title", isbn: "$book.isbn" },
            totalQuantity: 1,
          },
        },
      ]);

      res.status(200).json({
        success: true,
        message: "Borrowed books summary retrieved successfully",
        data: summary,
      });
    } catch (err) {
      next(err);
    }
  }
);

export default borrowRoutes;
