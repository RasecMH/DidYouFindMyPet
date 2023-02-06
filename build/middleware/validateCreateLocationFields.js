"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_status_codes_1 = require("http-status-codes");
const httpError_1 = __importDefault(require("../utils/httpError"));
const joiSchemas_1 = require("../utils/joiSchemas");
const validateCreateLocationFields = (req, res, next) => {
    const payload = req.body;
    const { error } = joiSchemas_1.locationSchema.validate(payload);
    if (error) {
        throw new httpError_1.default(http_status_codes_1.StatusCodes.BAD_REQUEST, error.message);
    }
    next();
};
exports.default = validateCreateLocationFields;
//# sourceMappingURL=validateCreateLocationFields.js.map