import MatchRepository from '../../repository/Match.repository';

export default class ListAllMatchesUseCase {
  constructor(private matchRepository: MatchRepository) { }

  async execute() {
    const matches = await this.matchRepository.findAll();

    return matches;
  }
}
