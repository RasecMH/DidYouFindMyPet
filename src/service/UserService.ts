import User from '../database/models/User';
import { IUser, IUserRegister } from '../interfaces/UserInterface';

export default class UserService {
  model = User;

  async create(data: IUserRegister): Promise<IUser> {
    return this.model.create({ ...data });
  }
}
