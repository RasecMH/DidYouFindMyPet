import { StatusCodes } from 'http-status-codes';
import { Request, Response, NextFunction } from 'express';
import HttpError from '../utils/httpError';
import LocationService from '../service/LocationService';

export default class LocationController {
  service = new LocationService();

  create = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { petId, location, address, cityId, message, phone, code } = req.body;
      const newLocation = await this.service.create({
        petId,
        location,
        address,
        cityId,
        message,
        phone,
        code,
      });

      const Location = await this.service.findById(newLocation.id);
      return res.status(StatusCodes.CREATED).json(Location);
    } catch (error) {
      next(error);
    }
  };

  findById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      const Location = await this.service.findById(Number(id));
      if (!Location) throw new HttpError(StatusCodes.NOT_FOUND, 'Location not found');

      return res.status(StatusCodes.OK).json(Location);
    } catch (error) {
      next(error);
    }
  };

  findAllByPetId = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { petId } = req.params;
      const Location = await this.service.findAllById(Number(petId));
      if (!Location) throw new HttpError(StatusCodes.NOT_FOUND, 'Location not found');

      return res.status(StatusCodes.OK).json(Location);
    } catch (error) {
      next(error);
    }
  };
}
