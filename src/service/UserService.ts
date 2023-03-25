import { StatusCodes } from 'http-status-codes';
import { IUser, IUserRegister } from '../interfaces/UserInterface';
import User from '../database/models/User';
import Pet from '../database/models/Pet';
// import LocationHistory from '../database/models/locationHistory';
// import Contact from '../database/models/Contact';
import HttpError from '../utils/httpError';
import City from '../database/models/City';
import State from '../database/models/State';

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
    const user = await this.model.findOne({ where: { email } });
    return user;
  }

  async findById(id: number): Promise< IUser | null> {
    const user = await this.model.findOne({
      where: { id },
      attributes: { exclude: ['password'] },
      include: [{ model: City,
        as: 'city',
        attributes: { exclude: ['id', 'stateId'] },
        include: [{ model: State, as: 'state', attributes: { exclude: ['id', 'countryId'] } }],
      }],
    });
    const pet = await Pet.findAll({ where: { userId: id } });
    if (user && pet) {
      user.pets = pet;
    }
    return user;
  }
}
