"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Contact_1 = __importDefault(require("../database/models/Contact"));
const locationHistory_1 = __importDefault(require("../database/models/locationHistory"));
const City_1 = __importDefault(require("../database/models/City"));
const State_1 = __importDefault(require("../database/models/State"));
class LocationService {
    constructor() {
        this.model = locationHistory_1.default;
    }
    async create(data) {
        const contact = await Contact_1.default.create({
            message: data.message, phone: data.phone, code: data.code
        });
        return this.model.create({ ...data, contactId: contact.id });
    }
    async findById(id) {
        return this.model.findOne({
            where: { id },
            include: [
                {
                    model: Contact_1.default,
                    as: 'contact'
                }
            ]
        });
    }
    async findAllById(petId) {
        return this.model.findAll({
            where: { petId },
            include: [
                {
                    model: Contact_1.default,
                    as: 'contact'
                },
                { model: City_1.default,
                    as: 'city',
                    attributes: { exclude: ['id', 'stateId'] },
                    include: [{ model: State_1.default, as: 'state', attributes: { exclude: ['id', 'countryId'] } }],
                }
            ]
        });
    }
    async findAll() {
        return this.model.findAll({
            include: [
                {
                    model: Contact_1.default,
                    as: 'contact'
                },
                { model: City_1.default,
                    as: 'city',
                    attributes: { exclude: ['id', 'stateId'] },
                    include: [{ model: State_1.default, as: 'state', attributes: { exclude: ['id', 'countryId'] } }],
                }
            ]
        });
    }
}
exports.default = LocationService;
//# sourceMappingURL=LocationService.js.map