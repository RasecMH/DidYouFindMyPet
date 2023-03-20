import { Op } from 'sequelize';
import { ICity } from '../interfaces/CitiesInterface';
import City from '../database/models/City';
import State from '../database/models/State';
import Country from '../database/models/Country';

export default class CitiesService {
  model = City;

  async findById(id: number): Promise<ICity | null> {
    return this.model.findOne({
      where: { id },
      include: [
        {
          model: State,
          as: 'state',
          include: [
            {
              model: Country,
              as: 'country' }] }] });
  }

  async findByQuery(query: string): Promise<ICity[] | []> {
    return this.model.findAll({
      where: {
        name: { [Op.like]: `%${query}%` },
      },
      include: [
        {
          model: State,
          as: 'state',
          include: [
            {
              model: Country,
              as: 'country' }] }],
    });
  }
}
