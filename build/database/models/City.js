"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const index_1 = __importDefault(require("./index"));
const State_1 = __importDefault(require("./State"));
class City extends sequelize_1.Model {
}
exports.default = City;
City.init({
    id: {
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        type: sequelize_1.INTEGER,
    },
    name: {
        allowNull: false,
        type: sequelize_1.STRING,
    },
    stateId: {
        allowNull: false,
        type: sequelize_1.INTEGER,
    },
}, {
    sequelize: index_1.default,
    modelName: 'City',
    tableName: 'cities',
    underscored: true,
    timestamps: false,
});
City.belongsTo(State_1.default, { foreignKey: 'stateId', as: 'state' });
//# sourceMappingURL=City.js.map