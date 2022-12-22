export interface IPetRegister {
  name: string;
  description: string;
  health: string;
  qrCode: string;
  userId: number;
}

export interface IPet extends IPetRegister {
  id: number;
}
