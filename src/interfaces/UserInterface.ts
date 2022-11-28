export interface IUserLogin {
  email: string;
  password: string;
}

export interface IUserRegister extends IUserLogin {
  name: string;
  address: string;
  cityId: number;
}

export interface IUser extends IUserRegister {
  id: number;
}
