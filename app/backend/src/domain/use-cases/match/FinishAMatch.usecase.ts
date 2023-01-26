import MatchRepository from '../../repository/Match.repository';

export default class FinishAMatchUseCase {
  constructor(private matchRepository: MatchRepository) { }

  async execute(id: number) {
    await this.matchRepository.finishMatch(id);
  }
}
