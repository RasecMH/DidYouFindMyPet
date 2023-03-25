"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bcryptjs_1 = __importStar(require("bcryptjs"));
const http_status_codes_1 = require("http-status-codes");
const httpError_1 = __importDefault(require("../utils/httpError"));
const UserService_1 = __importDefault(require("../service/UserService"));
const jwt_1 = require("../utils/jwt");
const LocationService_1 = __importDefault(require("../service/LocationService"));
// import HttpError from '../utils/httpError';
class UserController {
    constructor() {
        this.service = new UserService_1.default();
        this.locationService = new LocationService_1.default();
        this.register = async (req, res, next) => {
            try {
                const { name, email, password, address, cityId, phone, code } = req.body;
                const hashedPass = await bcryptjs_1.default.hash(password, 8);
                const newUser = await this.service.create({
                    name,
                    email,
                    password: hashedPass,
                    address,
                    cityId,
                    phone,
                    code,
                });
                const token = await (0, jwt_1.createToken)({ id: newUser.id });
                return res.status(http_status_codes_1.StatusCodes.CREATED).json({ token });
            }
            catch (error) {
                next(error);
            }
        };
        this.login = async (req, res, next) => {
            try {
                const { email, password } = req.body;
                const user = await this.service.findByEmail(email);
                if (!user)
                    throw new httpError_1.default(http_status_codes_1.StatusCodes.NOT_FOUND, 'E-mail or Password invalid');
                const validatePassword = await (0, bcryptjs_1.compare)(password, user.password);
                if (!validatePassword) {
                    throw new httpError_1.default(http_status_codes_1.StatusCodes.NOT_FOUND, 'E-mail or Password invalid');
                }
                const token = await (0, jwt_1.createToken)({ id: user.id });
                return res.status(http_status_codes_1.StatusCodes.OK).json({ token });
            }
            catch (error) {
                next(error);
            }
        };
        this.findById = async (req, res, next) => {
            try {
                const { userId } = req.body;
                const user = await this.service.findById(Number(userId));
                if (!user)
                    throw new httpError_1.default(http_status_codes_1.StatusCodes.NOT_FOUND, 'User not found');
                if (user.pets) {
                    const locations = await this.locationService.findAll();
                    const locationHistory = user.pets
                        .map((pet) => locations.filter((loc) => loc.petId === pet.id))
                        .flat(1);
                    return res.status(http_status_codes_1.StatusCodes.OK).json({ user, pets: user.pets, locationHistory });
                }
                return res.status(http_status_codes_1.StatusCodes.OK).json({ user });
            }
            catch (error) {
                next(error);
            }
        };
    }
}
exports.default = UserController;
//# sourceMappingURL=UserController.js.map