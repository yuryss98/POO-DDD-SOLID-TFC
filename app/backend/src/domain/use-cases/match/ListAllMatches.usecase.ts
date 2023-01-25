import MatchRepository from '../../repository/Match.repository';

export default class ListAllMatchesUseCase {
  constructor(private matchRepository: MatchRepository) { }

  async execute(query: string | undefined) {
    const matches = await this.matchRepository.findAll(query);

    return matches;
  }
}
