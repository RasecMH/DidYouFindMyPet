"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const City_1 = __importDefault(require("../database/models/City"));
const State_1 = __importDefault(require("../database/models/State"));
const Country_1 = __importDefault(require("../database/models/Country"));
class CitiesService {
    constructor() {
        this.model = City_1.default;
    }
    async findById(id) {
        return this.model.findOne({
            where: { id },
            include: [
                {
                    model: State_1.default,
                    as: 'state',
                    include: [
                        {
                            model: Country_1.default,
                            as: 'country'
                        }
                    ]
                }
            ]
        });
    }
    async findByQuery(query) {
        return this.model.findAll({
            where: {
                name: { [sequelize_1.Op.like]: `%${query}%` },
            },
            include: [
                {
                    model: State_1.default,
                    as: 'state',
                    include: [
                        {
                            model: Country_1.default,
                            as: 'country'
                        }
                    ]
                }
            ]
        });
    }
}
exports.default = CitiesService;
//# sourceMappingURL=CitiesService.js.map