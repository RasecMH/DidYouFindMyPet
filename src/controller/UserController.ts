import { StatusCodes } from 'http-status-codes';
import { Request, Response, NextFunction } from 'express';
// import { compare } from 'bcrypt';
import UserService from '../service/UserService';
import { createToken } from '../utils/jwt';
// import HttpError from '../utils/httpError';

export default class UserController {
  service = new UserService();

  register = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { name, email, password, address, cityId } = req.body;
      const newUser = await this.service.create({ name, email, password, address, cityId });
      const token = await createToken(newUser);

      return res.status(StatusCodes.CREATED).json({ token });
    } catch (error) {
      next(error);
    }
  };
}
