export interface IPetRegister {
  name: string;
  description: string;
  health: string;
  userId: number;
}

export interface IPet extends IPetRegister {
  id: number;
}
