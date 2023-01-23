import { compareSync } from 'bcryptjs';

export default class Password {
  static checkPassword(password: string, passwordDb: string) {
    const isMatch = compareSync(password, passwordDb);

    return isMatch;
  }
}
