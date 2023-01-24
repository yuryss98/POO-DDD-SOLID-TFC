import UserRepository from '../../repository/User.repository';
import { IUserCredentials } from '../../interfaces/IUser';
import HttpException from '../validations/Http.exception';
import { IAuthService } from '../../../infra/auth/Token';
import LoginValidation from '../validations/user-validations/Login.validation';
import IDecryptPassword from '../../interfaces/IDecryptPassword';

export default class LoginUseCase {
  constructor(
    private userRepository: UserRepository,
    private authService: IAuthService,
    private decryptPassword: IDecryptPassword,
  ) { }

  async execute(user: IUserCredentials) {
    LoginValidation.validateUserCredentials(user.email, user.password);

    const userFound = await this.userRepository.findByEmail(user.email);
    if (!userFound || !this.decryptPassword.checkPassword(user.password, userFound.password)) {
      throw new HttpException(401, 'Incorrect email or password');
    }

    const token = this.authService.createToken(
      userFound.username,
      userFound.id,
      userFound.email,
      userFound.role,
    );

    return token;
  }
}
