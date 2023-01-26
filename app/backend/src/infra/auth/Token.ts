import { sign } from 'jsonwebtoken';

export interface IAuthService {
  createToken(username: string, id: number, email: string, role: string): string
}

export default class AuthService implements IAuthService {
  private secretKey = process.env.JWT_SECRET || 'secret_key';

  createToken(username: string, id: number, email:string, role: string) {
    return sign({ data: { username, userId: id, email, role } }, this.secretKey, {
      expiresIn: '5h',
      algorithm: 'HS256',
    });
  }
}
