export interface IContactRegister {
  message?: string;
  phone?: string;
  code?: string;
}

export interface IContact extends IContactRegister {
  id: number;
}

export interface ILocationRegister extends IContactRegister {
  petId: number;
  location: string;
  address: string;
  cityId: number;
}

export interface ILocationWithContactId extends ILocationRegister {
  contactId: number;
}

export interface ILocation extends ILocationWithContactId {
  id: number;
}

export interface ILocationWithContact extends ILocation {
  message: string;
  phone: string;
  code: string;
}
