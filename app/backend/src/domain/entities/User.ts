export default class User {
  private _id: number;
  private _username: string;
  private _role: string;
  private _email: string;
  private _password: string;

  constructor() {
    this._id = 0;
    this._username = '';
    this._role = '';
    this._email = '';
    this._password = '';
  }

  get id() {
    return this._id;
  }

  get username() {
    return this._username;
  }

  get role() {
    return this._role;
  }

  get email() {
    return this._email;
  }

  get password() {
    return this._password;
  }
}
