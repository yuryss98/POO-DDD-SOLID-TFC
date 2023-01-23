import User from '../../../domain/entities/User';
import UserModel from '../../../database/models/User';

export default class SequelizeUserRepository {
  private modelUser = UserModel;

  async findByEmail(email: string) {
    const user = await this.modelUser.findOne({
      where: {
        email,
      },
    });

    return user?.dataValues as User;
  }
}
