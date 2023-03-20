"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_status_codes_1 = require("http-status-codes");
const httpError_1 = __importDefault(require("../utils/httpError"));
const CitiesService_1 = __importDefault(require("../service/CitiesService"));
class CitiesController {
    constructor() {
        this.service = new CitiesService_1.default();
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
        this.findByQuery = async (req, res, next) => {
            try {
                const { q } = req.query;
                if (typeof q === 'string') {
                    const Cities = await this.service.findByQuery(q);
                    return res.status(http_status_codes_1.StatusCodes.OK).json(Cities);
                }
            }
            catch (error) {
                next(error);
            }
        };
    }
}
exports.default = CitiesController;
//# sourceMappingURL=CitiesController.js.map