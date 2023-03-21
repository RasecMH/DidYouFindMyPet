import User from '../database/models/User';
import Pet from '../database/models/Pet';
import { IPet, IPetRegister } from '../interfaces/PetInterface';
import City from '../database/models/City';
import State from '../database/models/State';

export default class PetService {
  model = Pet;

  async create(data: IPetRegister): Promise<IPet> {
    return this.model.create({ ...data });
  }

  async updateQrCode(id: number, qrCode: string) {
    return this.model.update({ qrCode }, { where: { id } });
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
          },
          include: [{ model: City,
            as: 'city',
            attributes: { exclude: ['id', 'stateId'] },
            include: [{ model: State, as: 'state', attributes: { exclude: ['id', 'countryId'] } }],
          }],
        }] });
  }
}
