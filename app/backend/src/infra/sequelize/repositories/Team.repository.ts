import ITeamDTO from '../../../domain/interfaces/ITeam';
import TeamModel from '../../../database/models/Team';

export default class SequelizeTeamRepository {
  private modelTeam = TeamModel;

  async findAll() {
    const teams = await this.modelTeam.findAll({ raw: true });

    return teams as ITeamDTO[];
  }
}
