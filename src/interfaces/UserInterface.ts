import { IPet } from './PetInterface';

export interface IUserLogin {
  email: string;
  password: string;
}

export interface IUserRegister extends IUserLogin {
  name: string;
  address: string;
  cityId: number;
  phone: string;
  code: string;
  pets?: IPet[] | [];
}

export interface IUser extends IUserRegister {
  id: number;
}
