"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_status_codes_1 = require("http-status-codes");
const httpError_1 = __importDefault(require("../utils/httpError"));
const LocationService_1 = __importDefault(require("../service/LocationService"));
class LocationController {
    constructor() {
        this.service = new LocationService_1.default();
        this.create = async (req, res, next) => {
            try {
                const { petId, location, address, cityId, message, phone, code } = req.body;
                const newLocation = await this.service.create({
                    petId,
                    location,
                    address,
                    cityId,
                    message,
                    phone,
                    code,
                });
                const Location = await this.service.findById(newLocation.id);
                return res.status(http_status_codes_1.StatusCodes.CREATED).json(Location);
            }
            catch (error) {
                next(error);
            }
        };
        this.findById = async (req, res, next) => {
            try {
                const { id } = req.params;
                const Location = await this.service.findById(Number(id));
                if (!Location)
                    throw new httpError_1.default(http_status_codes_1.StatusCodes.NOT_FOUND, 'Location not found');
                return res.status(http_status_codes_1.StatusCodes.OK).json(Location);
            }
            catch (error) {
                next(error);
            }
        };
        this.findAllByPetId = async (req, res, next) => {
            try {
                const { petId } = req.params;
                const Location = await this.service.findAllById(Number(petId));
                if (!Location)
                    throw new httpError_1.default(http_status_codes_1.StatusCodes.NOT_FOUND, 'Location not found');
                return res.status(http_status_codes_1.StatusCodes.OK).json(Location);
            }
            catch (error) {
                next(error);
            }
        };
    }
}
exports.default = LocationController;
//# sourceMappingURL=LocationController.js.map