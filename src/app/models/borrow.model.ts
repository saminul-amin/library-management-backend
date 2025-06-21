import { Schema, model } from "mongoose";
import { IBorrow } from "../interfaces/borrow.interface";
import { Book } from "./book.model";

const borrowSchema = new Schema<IBorrow>(
  {
    book: {
      type: Schema.Types.ObjectId,
      ref: "Book",
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
      min: 1,
    },
    dueDate: {
      type: Date,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

borrowSchema.post("save", async function () {
  const borrowed = this as IBorrow;
  const bookDoc = await Book.findById(borrowed.book);
  if (bookDoc) {
    bookDoc.copies -= borrowed.quantity;
    bookDoc.available = bookDoc.copies > 0;
    await bookDoc.save();
  }
});

export const Borrow = model<IBorrow>("Borrow", borrowSchema);
