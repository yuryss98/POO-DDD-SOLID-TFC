import MatchRepository from '../../repository/Match.repository';

export default class ListAllMatchesUseCase {
  constructor(private matchRepository: MatchRepository) { }

  async execute(id: number) {
    await this.matchRepository.finishMatch(id);
  }
}
