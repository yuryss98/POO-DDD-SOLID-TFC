import { TeamRepository } from '../../repository';

export default class ListAllTeamsUseCase {
  constructor(private teamRepository: TeamRepository) { }

  async execute() {
    const teams = await this.teamRepository.findAll();

    return teams;
  }
}
