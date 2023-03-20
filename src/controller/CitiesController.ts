import { StatusCodes } from 'http-status-codes';
import { Request, Response, NextFunction } from 'express';
import HttpError from '../utils/httpError';
import CitiesService from '../service/CitiesService';

export default class CitiesController {
  service = new CitiesService();

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

  findByQuery = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { q } = req.query;
      if (typeof q === 'string') {
        const Cities = await this.service.findByQuery(q);
        return res.status(StatusCodes.OK).json(Cities);
      }
    } catch (error) {
      next(error);
    }
  };
}
