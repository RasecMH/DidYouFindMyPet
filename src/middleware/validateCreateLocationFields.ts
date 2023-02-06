import { StatusCodes } from 'http-status-codes';
import { NextFunction, Request, Response } from 'express';
import HttpError from '../utils/httpError';
import { locationSchema } from '../utils/joiSchemas';

const validateCreateLocationFields = (req: Request, res: Response, next: NextFunction) => {
  const payload = req.body;
  const { error } = locationSchema.validate(payload);

  if (error) {
    throw new HttpError(StatusCodes.BAD_REQUEST, error.message);
  }

  next();
};

export default validateCreateLocationFields;
