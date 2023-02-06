"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const index_1 = __importDefault(require("./index"));
const User_1 = __importDefault(require("./User"));
class Pet extends sequelize_1.Model {
}
exports.default = Pet;
Pet.init({
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
    description: {
        allowNull: false,
        type: sequelize_1.STRING,
    },
    health: {
        allowNull: false,
        type: sequelize_1.STRING,
    },
    qrCode: {
        allowNull: false,
        type: sequelize_1.STRING,
    },
    userId: {
        allowNull: false,
        type: sequelize_1.INTEGER,
    },
}, {
    sequelize: index_1.default,
    modelName: 'Pet',
    tableName: 'pets',
    underscored: true,
    timestamps: false,
});
Pet.belongsTo(User_1.default, { foreignKey: 'userId', as: 'user' });
//# sourceMappingURL=Pet.js.map