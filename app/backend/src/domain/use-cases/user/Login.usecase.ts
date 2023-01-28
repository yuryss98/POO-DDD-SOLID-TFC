import { UserRepository } from '../../repository';
import { IUserCredentials, IAuthService, IDecryptPassword } from '../../interfaces';
import HttpException from '../validations/Http.exception';
import LoginValidation from '../validations/user-validations/Login.validation';

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
