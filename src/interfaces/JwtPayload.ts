import { JwtPayload } from 'jsonwebtoken';

export interface JwtPayloadInterface extends JwtPayload {
  payload: {
    id: number;
  }
}
