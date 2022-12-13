import Joi from 'joi';
/* eslint-disable @typescript-eslint/naming-convention */

const ALLFIELDSMUSTBEFILLED = 'All fields must be filled';

export const loginSchema = Joi.object({
  email: Joi.string().email().required().messages({
    'any.required': ALLFIELDSMUSTBEFILLED,
    'string.empty': ALLFIELDSMUSTBEFILLED,
  }),
  password: Joi.string().required().messages({
    'any.required': ALLFIELDSMUSTBEFILLED,
    'string.empty': ALLFIELDSMUSTBEFILLED,
  }),
});

export const registerSchema = Joi.object({
  email: Joi.string().email().required().messages({
    'any.required': ALLFIELDSMUSTBEFILLED,
    'string.empty': ALLFIELDSMUSTBEFILLED,
  }),
  password: Joi.string().required().min(6).messages({
    'any.required': ALLFIELDSMUSTBEFILLED,
    'string.empty': ALLFIELDSMUSTBEFILLED,
  }),
  name: Joi.string().required().min(6).messages({
    'any.required': ALLFIELDSMUSTBEFILLED,
    'string.empty': ALLFIELDSMUSTBEFILLED,
  }),
  address: Joi.string().required().min(6).messages({
    'any.required': ALLFIELDSMUSTBEFILLED,
    'string.empty': ALLFIELDSMUSTBEFILLED,
  }),
  cityId: Joi.number().required().min(0).messages({
    'any.required': ALLFIELDSMUSTBEFILLED,
    'any.empty': ALLFIELDSMUSTBEFILLED,
  }),
});

export const createPetSchema = Joi.object({
  name: Joi.string().required().messages({
    'any.required': ALLFIELDSMUSTBEFILLED,
    'string.empty': ALLFIELDSMUSTBEFILLED,
  }),
  description: Joi.string().required().messages({
    'any.required': ALLFIELDSMUSTBEFILLED,
    'string.empty': ALLFIELDSMUSTBEFILLED,
  }),
  health: Joi.string().required().messages({
    'any.required': ALLFIELDSMUSTBEFILLED,
    'string.empty': ALLFIELDSMUSTBEFILLED,
  }),
});
