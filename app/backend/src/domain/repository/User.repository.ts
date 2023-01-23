import User from '../entities/User';

export default abstract class UserRepository {
  abstract findByEmail(email: string): Promise<User>;
}
