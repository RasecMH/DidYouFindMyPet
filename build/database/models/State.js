"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const Country_1 = __importDefault(require("./Country"));
const index_1 = __importDefault(require("./index"));
class State extends sequelize_1.Model {
}
exports.default = State;
State.init({
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
    countryId: {
        allowNull: false,
        type: sequelize_1.INTEGER,
    },
}, {
    sequelize: index_1.default,
    modelName: 'State',
    tableName: 'states',
    underscored: true,
    timestamps: false,
});
State.belongsTo(Country_1.default, { foreignKey: 'countryId', as: 'country' });
//# sourceMappingURL=State.js.map