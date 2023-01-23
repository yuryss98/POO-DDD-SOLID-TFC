export interface IUserCredentials {
  email: string,
  password: string
}

export interface IUserDTO extends IUserCredentials {
  id: number;
  username: string;
  role: string;
}
