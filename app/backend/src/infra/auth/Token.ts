import { sign } from 'jsonwebtoken';

export interface IAuthService {
  createToken(username: string, id: number, email: string): string
}

export default class AuthService implements IAuthService {
  private secretKey = process.env.JWT_SECRET as string;

  createToken(username: string, id: number, email:string) {
    return sign({ data: { username, userId: id, email } }, this.secretKey, {
      expiresIn: '5h',
      algorithm: 'HS256',
    });
  }
}
