"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const City_1 = __importDefault(require("./City"));
const Contact_1 = __importDefault(require("./Contact"));
const index_1 = __importDefault(require("./index"));
const Pet_1 = __importDefault(require("./Pet"));
class LocationHistory extends sequelize_1.Model {
}
exports.default = LocationHistory;
LocationHistory.init({
    id: {
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        type: sequelize_1.INTEGER,
    },
    petId: {
        allowNull: false,
        type: sequelize_1.INTEGER,
    },
    locationLink: {
        allowNull: false,
        type: sequelize_1.STRING,
    },
    address: {
        allowNull: false,
        type: sequelize_1.STRING,
    },
    cityId: {
        allowNull: false,
        type: sequelize_1.INTEGER,
    },
    contactId: {
        allowNull: false,
        type: sequelize_1.INTEGER,
    },
}, {
    sequelize: index_1.default,
    modelName: 'LocationHistory',
    tableName: 'location_history',
    underscored: true,
    timestamps: false,
});
LocationHistory.belongsTo(Pet_1.default, { foreignKey: 'petId', as: 'pet' });
LocationHistory.belongsTo(City_1.default, { foreignKey: 'cityId', as: 'city' });
LocationHistory.belongsTo(Contact_1.default, { foreignKey: 'contactId', as: 'contact' });
//# sourceMappingURL=locationHistory.js.map