"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const City_1 = __importDefault(require("./City"));
const index_1 = __importDefault(require("./index"));
class User extends sequelize_1.Model {
}
exports.default = User;
User.init({
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
    email: {
        allowNull: false,
        type: sequelize_1.STRING,
    },
    password: {
        allowNull: false,
        type: sequelize_1.STRING,
    },
    phone: {
        allowNull: false,
        type: sequelize_1.STRING,
    },
    code: {
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
}, {
    sequelize: index_1.default,
    modelName: 'User',
    tableName: 'users',
    underscored: true,
    timestamps: false,
});
User.belongsTo(City_1.default, { foreignKey: 'cityId', as: 'city' });
//# sourceMappingURL=User.js.map