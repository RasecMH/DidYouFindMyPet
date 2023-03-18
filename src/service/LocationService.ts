import Contact from '../database/models/Contact';
import Location from '../database/models/locationHistory';
import { ILocation, ILocationRegister } from '../interfaces/LocationInterface';

export default class LocationService {
  model = Location;

  async create(data: ILocationRegister): Promise<ILocation> {
    const contact = await Contact.create({
      message: data.message, phone: data.phone, code: data.code });
    return this.model.create({ ...data, contactId: contact.id });
  }

  async findById(id: number): Promise<ILocation | null> {
    return this.model.findOne({
      where: { id },
      include: [
        {
          model: Contact,
          as: 'contact' }] });
  }

  async findAllById(petId: number): Promise<ILocation[] | []> {
    return this.model.findAll({
      where: { petId },
      include: [
        {
          model: Contact,
          as: 'contact' }] });
  }

  async findAll(): Promise<ILocation[] | []> {
    return this.model.findAll({
      include: [
        {
          model: Contact,
          as: 'contact' }] });
  }
}
