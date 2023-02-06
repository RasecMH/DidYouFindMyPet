"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.locationSchema = exports.createPetSchema = exports.registerSchema = exports.loginSchema = void 0;
const joi_1 = __importDefault(require("joi"));
/* eslint-disable @typescript-eslint/naming-convention */
const ALLFIELDSMUSTBEFILLED = 'All fields must be filled';
exports.loginSchema = joi_1.default.object({
    email: joi_1.default.string().email().required().messages({
        'any.required': ALLFIELDSMUSTBEFILLED,
        'string.empty': ALLFIELDSMUSTBEFILLED,
    }),
    password: joi_1.default.string().required().messages({
        'any.required': ALLFIELDSMUSTBEFILLED,
        'string.empty': ALLFIELDSMUSTBEFILLED,
    }),
});
exports.registerSchema = joi_1.default.object({
    email: joi_1.default.string().email().required().messages({
        'any.required': ALLFIELDSMUSTBEFILLED,
        'string.empty': ALLFIELDSMUSTBEFILLED,
    }),
    password: joi_1.default.string().required().min(6).messages({
        'any.required': ALLFIELDSMUSTBEFILLED,
        'string.empty': ALLFIELDSMUSTBEFILLED,
    }),
    name: joi_1.default.string().required().min(6).messages({
        'any.required': ALLFIELDSMUSTBEFILLED,
        'string.empty': ALLFIELDSMUSTBEFILLED,
    }),
    address: joi_1.default.string().required().min(6).messages({
        'any.required': ALLFIELDSMUSTBEFILLED,
        'string.empty': ALLFIELDSMUSTBEFILLED,
    }),
    cityId: joi_1.default.number().required().min(0).messages({
        'any.required': ALLFIELDSMUSTBEFILLED,
        'any.empty': ALLFIELDSMUSTBEFILLED,
    }),
});
exports.createPetSchema = joi_1.default.object({
    name: joi_1.default.string().required().messages({
        'any.required': ALLFIELDSMUSTBEFILLED,
        'string.empty': ALLFIELDSMUSTBEFILLED,
    }),
    description: joi_1.default.string().required().messages({
        'any.required': ALLFIELDSMUSTBEFILLED,
        'string.empty': ALLFIELDSMUSTBEFILLED,
    }),
    health: joi_1.default.string().required().messages({
        'any.required': ALLFIELDSMUSTBEFILLED,
        'string.empty': ALLFIELDSMUSTBEFILLED,
    }),
});
exports.locationSchema = joi_1.default.object({
    petId: joi_1.default.number().required().min(0).messages({
        'any.required': ALLFIELDSMUSTBEFILLED,
        'any.empty': ALLFIELDSMUSTBEFILLED,
    }),
    locationLink: joi_1.default.string().required().messages({
        'any.required': ALLFIELDSMUSTBEFILLED,
        'string.empty': ALLFIELDSMUSTBEFILLED,
    }),
    address: joi_1.default.string().required().messages({
        'any.required': ALLFIELDSMUSTBEFILLED,
        'string.empty': ALLFIELDSMUSTBEFILLED,
    }),
    cityId: joi_1.default.number().required().min(0).messages({
        'any.required': ALLFIELDSMUSTBEFILLED,
        'any.empty': ALLFIELDSMUSTBEFILLED,
    }),
    message: joi_1.default.string().required().messages({
        'any.required': ALLFIELDSMUSTBEFILLED,
        'string.empty': ALLFIELDSMUSTBEFILLED,
    }),
    phone: joi_1.default.string().required().messages({
        'any.required': ALLFIELDSMUSTBEFILLED,
        'string.empty': ALLFIELDSMUSTBEFILLED,
    }),
});
//# sourceMappingURL=joiSchemas.js.map