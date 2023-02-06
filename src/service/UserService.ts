import { StatusCodes } from 'http-status-codes';
import User from '../database/models/User';
import { IUser, IUserRegister } from '../interfaces/UserInterface';
import HttpError from '../utils/httpError';

export default class UserService {
  model = User;

  async create(data: IUserRegister): Promise<IUser> {
    const hasUser = await this.model.findOne({ where: { email: data.email } });
    if (hasUser) {
      throw new HttpError(StatusCodes.CONFLICT, 'email unavailable');
    }
    return this.model.create({ ...data });
  }

  async findByEmail(email: string): Promise<IUser | null> {
    return this.model.findOne({ where: { email } });
  }

  async findById(id: number): Promise<IUser | null> {
    return this.model.findOne({ where: { id }, attributes: { exclude: ['password'] } });
  }
}
