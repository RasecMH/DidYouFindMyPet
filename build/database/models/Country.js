"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const index_1 = __importDefault(require("./index"));
class Country extends sequelize_1.Model {
}
exports.default = Country;
Country.init({
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
    phone: {
        allowNull: false,
        type: sequelize_1.INTEGER,
    },
    code: {
        allowNull: false,
        type: sequelize_1.STRING,
    },
}, {
    sequelize: index_1.default,
    modelName: 'Country',
    tableName: 'countries',
    underscored: true,
    timestamps: false,
});
//# sourceMappingURL=Country.js.map