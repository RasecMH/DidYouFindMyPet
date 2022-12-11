import { StatusCodes } from 'http-status-codes';
import { NextFunction, Request, Response } from 'express';
import HttpError from '../utils/httpError';
import { registerSchema } from '../utils/joiSchemas';

const validateRegisterFields = (req: Request, res: Response, next: NextFunction) => {
  const payload = req.body;
  const { error } = registerSchema.validate(payload);

  if (error) {
    throw new HttpError(StatusCodes.BAD_REQUEST, error.message);
  }

  next();
};

export default validateRegisterFields;
