"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_status_codes_1 = require("http-status-codes");
const httpError_1 = __importDefault(require("../utils/httpError"));
const PetService_1 = __importDefault(require("../service/PetService"));
// import createQrCode from '../utils/createQrCode';
class PetController {
    constructor() {
        this.service = new PetService_1.default();
        this.create = async (req, res, next) => {
            try {
                const baseApiQrCode = 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=';
                const baseUrl = 'https://did-you-find-my-pet.vercel.app/pet/';
                const { name, description, health, userId } = req.body;
                const newPet = await this.service.create({
                    name,
                    description,
                    health,
                    qrCode: 'Not generated',
                    userId,
                });
                // const qr = await createQrCode(newPet.id);
                // console.log(qr);
                await this.service.updateQrCode(newPet.id, `${baseApiQrCode}${baseUrl}${newPet.id}`);
                const pet = await this.service.findById(newPet.id);
                return res.status(http_status_codes_1.StatusCodes.CREATED).json(pet);
            }
            catch (error) {
                next(error);
            }
        };
        this.findById = async (req, res, next) => {
            try {
                const { id } = req.params;
                const pet = await this.service.findById(Number(id));
                if (!pet)
                    throw new httpError_1.default(http_status_codes_1.StatusCodes.NOT_FOUND, 'Pet not found');
                return res.status(http_status_codes_1.StatusCodes.OK).json(pet);
            }
            catch (error) {
                next(error);
            }
        };
    }
}
exports.default = PetController;
//# sourceMappingURL=PetController.js.map