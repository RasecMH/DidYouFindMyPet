import User from '../database/models/User';
import Pet from '../database/models/Pet';
import { IPet, IPetRegister } from '../interfaces/PetInterface';

export default class PetService {
  model = Pet;

  async create(data: IPetRegister): Promise<IPet> {
    return this.model.create({ ...data });
  }

  async findById(id: number): Promise<IPet | null> {
    return this.model.findOne({
      where: { id },
      include: [
        {
          model: User,
          as: 'user',
          attributes: {
            exclude: ['password'],
          } }] });
  }
}