import MatchRepository from '../../repository/Match.repository';

export default class GameUpdateInProgressUseCase {
  constructor(private matchRepository: MatchRepository) { }

  async execute(id: number) {
    await this.matchRepository.gameUpdateInProgress(id);
  }
}
