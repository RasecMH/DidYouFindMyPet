"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_status_codes_1 = require("http-status-codes");
const User_1 = __importDefault(require("../database/models/User"));
const jwt_1 = require("../utils/jwt");
const httpError_1 = __importDefault(require("../utils/httpError"));
const validateUserToken = async (req, res, next) => {
    try {
        const token = req.header('Authorization');
        if (!token) {
            throw new httpError_1.default(http_status_codes_1.StatusCodes.UNAUTHORIZED, 'Token not found');
        }
        const { id } = await (0, jwt_1.validateToken)(token);
        const user = await User_1.default.findOne({ where: id });
        if (!user) {
            throw new httpError_1.default(http_status_codes_1.StatusCodes.UNAUTHORIZED, 'Expired or invalid token');
        }
        req.body.userId = user.id;
        next();
    }
    catch (error) {
        next(error);
    }
};
exports.default = validateUserToken;
//# sourceMappingURL=validateToken.js.map