"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const book_controller_1 = __importDefault(require("./app/controllers/book.controller"));
const borrow_controller_1 = __importDefault(require("./app/controllers/borrow.controller"));
const errorHandler_1 = __importDefault(require("./app/middlewares/errorHandler"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use("/api/books", book_controller_1.default);
app.use("/api/borrow", borrow_controller_1.default);
app.use(errorHandler_1.default);
app.get("/", (req, res) => {
    res.send("Welcome to Library Management Backend!!");
});
exports.default = app;
