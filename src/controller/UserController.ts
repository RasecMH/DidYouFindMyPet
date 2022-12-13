import bcrypt, { compare } from 'bcryptjs';
import { StatusCodes } from 'http-status-codes';
import { Request, Response, NextFunction } from 'express';
import HttpError from '../utils/httpError';
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

  login = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { email, password } = req.body;
      const user = await this.service.findByEmail(email);
      if (!user) throw new HttpError(StatusCodes.NOT_FOUND, 'E-mail or Password invalid');

      const validatePassword = await compare(password, user.password);
      if (!validatePassword) {
        throw new HttpError(StatusCodes.NOT_FOUND, 'E-mail or Password invalid');
      }

      const token = await createToken({ ...user });

      return res.status(StatusCodes.OK).json({ token });
    } catch (error) {
      next(error);
    }
  };

  findById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      const user = await this.service.findById(Number(id));
      if (!user) throw new HttpError(StatusCodes.NOT_FOUND, 'User not found');

      return res.status(StatusCodes.OK).json({ user });
    } catch (error) {
      next(error);
    }
  };
}
