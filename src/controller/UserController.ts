import bcrypt from 'bcryptjs';
import { StatusCodes } from 'http-status-codes';
import { Request, Response, NextFunction } from 'express';
import UserService from '../service/UserService';
import { createToken } from '../utils/jwt';
// import HttpError from '../utils/httpError';

export default class UserController {
  service = new UserService();

  register = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { name, email, password, address, cityId } = req.body;
      const hashedPass = await bcrypt.hash(password, 8);
      const newUser = await this.service.create({
        name,
        email,
        password: hashedPass,
        address,
        cityId,
      });

      const token = await createToken({ ...newUser });

      return res.status(StatusCodes.CREATED).json({ token });
    } catch (error) {
      next(error);
    }
  };
}
