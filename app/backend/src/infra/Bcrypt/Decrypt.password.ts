import { compareSync } from 'bcryptjs';

export default class DecryptPassword {
  private comparePassword = compareSync;

  checkPassword(password: string, passwordDb: string) {
    const isMatch = this.comparePassword(password, passwordDb);

    return isMatch;
  }
}
