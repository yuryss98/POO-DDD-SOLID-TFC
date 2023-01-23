import { IUserCredentials } from '../../../interfaces/IUser';
import HttpException from '../Http.exception';

export default class LoginValidation implements IUserCredentials {
  constructor(private _email: string, private _password: string) {
    this.validateUserCredentials();
  }

  validateUserCredentials() {
    if (!this._email || !this._password) {
      throw new HttpException(400, 'All fields must be filled');
    }

    const isValidEmail = this._email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{3})$/i);

    if (!isValidEmail) {
      throw new HttpException(401, 'Incorrect email or password');
    }
  }

  get email() {
    return this._email;
  }

  get password() {
    return this._password;
  }
}
