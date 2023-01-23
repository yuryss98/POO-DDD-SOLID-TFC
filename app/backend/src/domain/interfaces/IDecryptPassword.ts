export default interface IDecryptPassword {
  checkPassword(password: string, passwordDb: string): boolean
}
