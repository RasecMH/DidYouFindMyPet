"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_status_codes_1 = require("http-status-codes");
const User_1 = __importDefault(require("../database/models/User"));
const httpError_1 = __importDefault(require("../utils/httpError"));
class UserService {
    constructor() {
        this.model = User_1.default;
    }
    async create(data) {
        const hasUser = await this.model.findOne({ where: { email: data.email } });
        if (hasUser) {
            throw new httpError_1.default(http_status_codes_1.StatusCodes.CONFLICT, 'email unavailable');
        }
        return this.model.create({ ...data });
    }
    async findByEmail(email) {
        return this.model.findOne({ where: { email } });
    }
    async findById(id) {
        return this.model.findOne({ where: { id }, attributes: { exclude: ['password'] } });
    }
}
exports.default = UserService;
//# sourceMappingURL=UserService.js.map