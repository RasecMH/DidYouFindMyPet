export interface IPetRegister {
  name: string;
  description: string;
  health: string;
  image: string;
  userId: number;
}

export interface IPet extends IPetRegister {
  id: number;
}
