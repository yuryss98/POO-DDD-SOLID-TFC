import HttpException from '../Http.exception';

export default class LoginValidation {
  static validateUserCredentials(email: string, password: string) {
    if (!email || !password) {
      throw new HttpException(400, 'All fields must be filled');
    }

    const isValidEmail = email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{3})$/i);

    if (!isValidEmail) {
      throw new HttpException(401, 'Incorrect email or password');
    }
  }
}
