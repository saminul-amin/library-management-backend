"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const errorHandler = (err, req, res, next) => {
    res.status(500).json({
        success: false,
        message: "Validation failed",
        error: err,
    });
};
exports.default = errorHandler;
