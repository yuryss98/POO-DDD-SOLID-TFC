import TeamRepository from '../../repository/Team.repository';

export default class ListTeamByIdUseCase {
  constructor(private teamRepository: TeamRepository) { }

  async execute(id: number) {
    const team = await this.teamRepository.findById(id);

    return team;
  }
}
