import HttpException from '../Http.exception';

export default class SaveMatchValidation {
  static validateTeamsIds(homeTeamId: number, awayTeamId: number) {
    if (homeTeamId === awayTeamId) {
      throw new HttpException(422, 'It is not possible to create a match with two equal teams');
    }
  }
}
