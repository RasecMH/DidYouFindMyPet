import { StatusCodes } from 'http-status-codes';
import { NextFunction, Request, Response } from 'express';
import User from '../database/models/User';
import { validateToken } from '../utils/jwt';
import HttpError from '../utils/httpError';

const validateUserToken = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const token = req.header('Authorization');

    if (!token) {
      throw new HttpError(StatusCodes.UNAUTHORIZED, 'Token not found');
    }

    const { id } = await validateToken(token);

    const user = await User.findOne({ where: id });

    if (!user) {
      throw new HttpError(StatusCodes.UNAUTHORIZED, 'Expired or invalid token');
    }

    req.body.userId = user.id;
    next();
  } catch (error) {
    next(error);
  }
};

export default validateUserToken;
