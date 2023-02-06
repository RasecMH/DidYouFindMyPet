"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const index_1 = __importDefault(require("./index"));
class Contact extends sequelize_1.Model {
}
exports.default = Contact;
Contact.init({
    id: {
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        type: sequelize_1.INTEGER,
    },
    message: {
        allowNull: false,
        type: sequelize_1.STRING,
    },
    phone: {
        allowNull: false,
        type: sequelize_1.STRING,
    },
}, {
    sequelize: index_1.default,
    modelName: 'Contact',
    tableName: 'contacts',
    underscored: true,
    timestamps: false,
});
//# sourceMappingURL=Contact.js.map