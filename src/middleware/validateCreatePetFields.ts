import { StatusCodes } from 'http-status-codes';
import { NextFunction, Request, Response } from 'express';
import HttpError from '../utils/httpError';
import { createPetSchema } from '../utils/joiSchemas';

const validateCreatePetFields = (req: Request, res: Response, next: NextFunction) => {
  const payload = req.body;
  const { error } = createPetSchema.validate(payload);

  if (error) {
    throw new HttpError(StatusCodes.BAD_REQUEST, error.message);
  }

  next();
};

export default validateCreatePetFields;
