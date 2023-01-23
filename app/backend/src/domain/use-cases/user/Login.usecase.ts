import UserRepository from '../../repository/User.repository';
import { IUserCredentials } from '../../entities/interfaces/IUser';
import HttpException from '../validations/Http.exception';
import Password from '../validations/Decrypt.password';
import { IAuthService } from '../../../infra/auth/Token';
import LoginValidation from '../validations/user-validations/Login.validation';

export default class LoginUseCase {
  constructor(private userRepository: UserRepository, private authService: IAuthService) { }

  async execute(user: IUserCredentials) {
    const validateUserCredentials = new LoginValidation(user.email, user.password);

    const userFound = await this.userRepository.findByEmail(validateUserCredentials.email);
    if (!userFound || !Password.checkPassword(user.password, userFound.password)) {
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
