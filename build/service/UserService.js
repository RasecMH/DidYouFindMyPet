"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_status_codes_1 = require("http-status-codes");
const User_1 = __importDefault(require("../database/models/User"));
const Pet_1 = __importDefault(require("../database/models/Pet"));
// import LocationHistory from '../database/models/locationHistory';
// import Contact from '../database/models/Contact';
const httpError_1 = __importDefault(require("../utils/httpError"));
const City_1 = __importDefault(require("../database/models/City"));
const State_1 = __importDefault(require("../database/models/State"));
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
        const user = await this.model.findOne({
            where: { id },
            attributes: { exclude: ['password'] },
            include: [{ model: City_1.default,
                    as: 'city',
                    attributes: { exclude: ['id', 'stateId'] },
                    include: [{ model: State_1.default, as: 'state', attributes: { exclude: ['id', 'countryId'] } }],
                }],
        });
        const pet = await Pet_1.default.findAll({ where: { userId: id } });
        if (user && pet) {
            user.pets = pet;
        }
        return user;
    }
}
exports.default = UserService;
//# sourceMappingURL=UserService.js.map