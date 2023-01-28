export default interface IAuthService {
  createToken(username: string, id: number, email: string, role: string): string
}
