# 📚 Library Management System API (with TypeScript, Express & MongoDB)

## Project Overview

A clean and RESTful **Library Management API** built using **Express**, **TypeScript**, and **MongoDB** (Mongoose). This delightful backend project helps you create, read, update, delete, and borrow books. Yes — books! Because reading is still cool in 2025.

---

## Features

- Add, update, delete, and retrieve books
- Borrow books (only if they’re available, duh)
- Business logic: No borrowing more than available copies
- Automatic stock management after each borrow
- Aggregation summary: See how many times each book was borrowed
- Validations using Mongoose schema rules
- Mongoose middleware and instance methods (a little backend sorcery)

---

## ⚙️ Tech Stack

| Tech      | Purpose                      |
|-----------|------------------------------|
| **TypeScript** | Type safety |
| **Express**    | Web server                |
| **MongoDB**    | Database of choice        |
| **Mongoose**   | ODM to make MongoDB bearable |

---

## API Endpoints

### 📘 Books

#### `POST /api/books`
Create a new book  
```json
{
  "title": "The Theory of Everything",
  "author": "Stephen Hawking",
  "genre": "SCIENCE",
  "isbn": "9780553380163",
  "description": "A book about space, time, and everything.",
  "copies": 5
}
```

#### `GET /api/books`
Query books (with `filter`, `sort`, `limit`)

#### `GET /api/books/:id`
Retrieve a single book by ID

#### `PUT /api/books/:id`
Update a book’s fields

#### `DELETE /api/books/:id`
Remove a book (RIP)


### 📦 Borrow

#### `POST /api/borrow`
Borrow books (only if enough are in stock)
```json
{
  "book": "64ab3f9e2a4b5c6d7e8f9012",
  "quantity": 2,
  "dueDate": "2025-07-18T00:00:00.000Z"
}
```

#### `GET /api/borrow`
See borrowed books summary
(Returns book title, ISBN, and total borrowed quantity — because stats are important)

---

## 💡 Developer Features

* Type-safe interfaces (`IBook`, `IBorrow`) so you don’t mess up fields like `copiez` instead of `copies`.
* Centralized error handler (no stack trace explosion on your terminal).
* Clean folder structure (as if you really care about scalability on a 3-page API, but still — why not?).

---

## Getting Started

### 1. Clone the Repo

```bash
git clone git@github.com:saminul-amin/library-management-backend.git
cd library-management-backend
```

### 2. Install dependencies

```bash
npm install
```

### 3. Create `.env` 

### 4. Run the app

```bash
npm run dev
```

---

## Example Data

You may test the API using Postman, or Thunder Client.

---

## Contact

If you have questions, suggestions — feel free to reach out:

* **Author: Md. Saminul Amin**

* LinkedIn: [Md. Saminul Amin](https://www.linkedin.com/in/md-saminul-amin-91605730a/)

* Email: [saminul.amin@gmail.com](mailto:saminul.amin@gmail.com)

* GitHub: [saminul-amin](https://github.com/saminul-amin)

---

## Conclusion

This project was designed to demonstrate key backend development concepts using **TypeScript**, **Express**, and **MongoDB (using Mongoose)** — and you’ve just implemented them all like a pro.

From validating data to handling business logic and even generating aggregation reports, this API is well-structured, easy to extend, and ready for real-world use.

