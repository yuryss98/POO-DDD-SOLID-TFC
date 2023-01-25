import MatchModel from '../../../database/models/Match';
import IMatchDTO from '../../../domain/interfaces/IMatch';

export default class SequelizeMatchRepository {
  private modelMatch = MatchModel;

  async findAll() {
    const matches = await this.modelMatch.findAll({ raw: true });

    return matches as IMatchDTO[];
  }
}
