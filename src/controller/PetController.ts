import { StatusCodes } from 'http-status-codes';
import { Request, Response, NextFunction } from 'express';
import HttpError from '../utils/httpError';
import PetService from '../service/PetService';
// import createQrCode from '../utils/createQrCode';

export default class PetController {
  service = new PetService();

  create = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const baseApiQrCode = 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=';
      const baseUrl = 'https://did-you-find-my-pet.vercel.app/pet/';
      const { name, description, health, userId } = req.body;
      const newPet = await this.service.create({
        name,
        description,
        health,
        qrCode: 'Not generated',
        userId,
      });
      // const qr = await createQrCode(newPet.id);
      // console.log(qr);

      await this.service.updateQrCode(newPet.id, `${baseApiQrCode}${baseUrl}${newPet.id}`);
      const pet = await this.service.findById(newPet.id);
      return res.status(StatusCodes.CREATED).json(pet);
    } catch (error) {
      next(error);
    }
  };

  findById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      const pet = await this.service.findById(Number(id));
      if (!pet) throw new HttpError(StatusCodes.NOT_FOUND, 'Pet not found');

      return res.status(StatusCodes.OK).json(pet);
    } catch (error) {
      next(error);
    }
  };
}
