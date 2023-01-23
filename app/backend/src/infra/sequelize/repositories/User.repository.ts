import UserModel from '../../../database/models/User';
import { IUserDTO } from '../../../domain/entities/interfaces/IUser';

export default class SequelizeUserRepository {
  private modelUser = UserModel;

  async findByEmail(email: string) {
    const user = await this.modelUser.findOne({
      where: {
        email,
      },
    });

    return user?.dataValues as IUserDTO;
  }
}
