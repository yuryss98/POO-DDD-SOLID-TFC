import Team from '../../../database/models/Team';
import MatchModel from '../../../database/models/Match';
import IMatchDTO from '../../../domain/interfaces/IMatch';

export default class SequelizeMatchRepository {
  private modelMatch = MatchModel;

  async findAll() {
    const matches = await this.modelMatch.findAll({
      include: [
        { model: Team, as: 'homeTeam', attributes: ['teamName'] },
        { model: Team, as: 'awayTeam', attributes: ['teamName'] },
      ],
    });

    const matchDataValues = matches.map((match) => match.dataValues);
    const matchData = matchDataValues.map((data) => ({
      ...data,
      homeTeam: data.homeTeam.dataValues,
      awayTeam: data.awayTeam.dataValues,
    }));

    return matchData as IMatchDTO[];
  }
}
