import { IMatchSave } from '../../interfaces/IMatch';
import MatchRepository from '../../repository/Match.repository';
import HttpException from '../validations/Http.exception';
import SaveMatchValidation from '../validations/match-validations/SaveMatch.validation';

export default class SaveMatchUseCase {
  constructor(private matchRepository: MatchRepository) { }

  async execute(match: IMatchSave) {
    SaveMatchValidation.validateFieldInput(match);

    const teams = await this.matchRepository.findAll(undefined);
    const homeTeamExists = teams.filter((team) => team.homeTeamId === match.homeTeamId);
    const awayTeamExists = teams.filter((team) => team.awayTeamId === match.awayTeamId);

    if (!homeTeamExists.length || !awayTeamExists.length) {
      throw new HttpException(404, 'There is no team with such id!');
    }

    const saveMatchId = await this.matchRepository.saveMatch(match);

    return { id: saveMatchId, ...match, inProgress: true };
  }
}
