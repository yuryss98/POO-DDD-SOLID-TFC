import { IMatchSave } from '../../../interfaces/IMatch';
import HttpException from '../Http.exception';

export default class SaveMatchValidation {
  static validateFieldInput(fieldsInput: IMatchSave) {
    if (
      !fieldsInput
        || !fieldsInput.awayTeamGoals
        || !fieldsInput.awayTeamId
        || !fieldsInput.homeTeamGoals
        || !fieldsInput.homeTeamId
    ) {
      throw new HttpException(400, 'All fields must be filled');
    }

    SaveMatchValidation.validateTeamsIds(fieldsInput.awayTeamId, fieldsInput.awayTeamId);
  }

  static validateTeamsIds(awayTeamId: number, homeTeamId: number) {
    if (awayTeamId === homeTeamId) {
      throw new HttpException(422, 'It is not possible to create a match with two equal teams');
    }
  }
}
