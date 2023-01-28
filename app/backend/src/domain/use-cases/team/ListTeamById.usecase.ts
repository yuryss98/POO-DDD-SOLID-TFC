import { TeamRepository } from '../../repository';

export default class ListTeamByIdUseCase {
  constructor(private teamRepository: TeamRepository) { }

  async execute(id: number) {
    const team = await this.teamRepository.findById(id);

    return team;
  }
}
