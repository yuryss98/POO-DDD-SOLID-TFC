import ITeamDTO from '../../../domain/interfaces/ITeam';
import TeamModel from '../../../database/models/Team';

export default class SequelizeTeamRepository {
  private modelTeam = TeamModel;

  async findAll() {
    const teams = await this.modelTeam.findAll({ raw: true });

    return teams as ITeamDTO[];
  }

  async findById(id: number) {
    const team = await this.modelTeam.findByPk(id);

    return team as ITeamDTO;
  }
}
