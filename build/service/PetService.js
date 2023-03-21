"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = __importDefault(require("../database/models/User"));
const Pet_1 = __importDefault(require("../database/models/Pet"));
const City_1 = __importDefault(require("../database/models/City"));
const State_1 = __importDefault(require("../database/models/State"));
class PetService {
    constructor() {
        this.model = Pet_1.default;
    }
    async create(data) {
        return this.model.create({ ...data });
    }
    async updateQrCode(id, qrCode) {
        return this.model.update({ qrCode }, { where: { id } });
    }
    async findById(id) {
        return this.model.findOne({
            where: { id },
            include: [
                {
                    model: User_1.default,
                    as: 'user',
                    attributes: {
                        exclude: ['password'],
                    },
                    include: [{ model: City_1.default,
                            as: 'city',
                            attributes: { exclude: ['id', 'stateId'] },
                            include: [{ model: State_1.default, as: 'state', attributes: { exclude: ['id', 'countryId'] } }],
                        }],
                }
            ]
        });
    }
}
exports.default = PetService;
//# sourceMappingURL=PetService.js.map