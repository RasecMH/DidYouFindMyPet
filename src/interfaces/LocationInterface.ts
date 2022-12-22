export interface IContactRegister {
  message: string;
  phone: string;
}

export interface IContact extends IContactRegister {
  id: number;
}

export interface ILocationRegister extends IContactRegister {
  petId: number;
  locationLink: string;
  address: string;
  cityId: number;
  userId: number;
}

export interface ILocationWithContact extends ILocationRegister {
  contactId: number;
}

export interface ILocation extends ILocationWithContact {
  id: number;
}
