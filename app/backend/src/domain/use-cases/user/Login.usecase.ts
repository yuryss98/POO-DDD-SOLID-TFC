import UserRepository from '../../repository/User.repository';
import { IUserCredentials } from '../../entities/interfaces/IUser';
import HttpException from '../validations/Http.exception';
import Password from '../validations/Decrypt.password';
import { IAuthService } from '../../../infra/auth/Token';

export default class LoginUseCase {
  constructor(private userRepository: UserRepository, private authService: IAuthService) { }

  async execute(user: IUserCredentials) {
    const userFound = await this.userRepository.findByEmail(user.email);
    if (!userFound || !Password.checkPassword(user.password, userFound.password)) {
      throw new HttpException(401, 'Incorrect email or password');
    }

    const token = this.authService.createToken(userFound.username, userFound.id, userFound.email);

    return token;
  }
}
