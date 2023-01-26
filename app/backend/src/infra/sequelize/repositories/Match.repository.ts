import Team from '../../../database/models/Team';
import MatchModel from '../../../database/models/Match';
import IMatchDTO, { IMatchSave } from '../../../domain/interfaces/IMatch';

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

  async saveMatch(match: IMatchSave) {
    const result = await this.modelMatch.create({ ...match });

    return result.dataValues.id;
  }

  async finishMatch(id: number) {
    await this.modelMatch.update(
      { inProgress: false },
      { where: { id } },
    );
  }
}
