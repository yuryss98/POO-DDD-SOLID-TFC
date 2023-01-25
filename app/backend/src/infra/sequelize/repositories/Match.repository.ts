import Team from '../../../database/models/Team';
import MatchModel from '../../../database/models/Match';
import IMatchDTO from '../../../domain/interfaces/IMatch';

export default class SequelizeMatchRepository {
  private modelMatch = MatchModel;

  async findAll(query: string | undefined) {
    const where = query ? { inProgress: query === 'true' } : undefined;

    const matches = await this.modelMatch.findAll({
      where,
      include: [
        { model: Team, as: 'homeTeam', attributes: ['teamName'] },
        { model: Team, as: 'awayTeam', attributes: ['teamName'] },
      ],
    });

    return matches as unknown as IMatchDTO[];
  }
}
