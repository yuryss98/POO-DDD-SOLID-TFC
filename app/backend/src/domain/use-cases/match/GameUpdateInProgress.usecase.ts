import { IUpdateMatchInProgress } from '../../interfaces/IMatch';
import MatchRepository from '../../repository/Match.repository';

export default class GameUpdateInProgressUseCase {
  constructor(private matchRepository: MatchRepository) { }

  async execute(id: number, input: IUpdateMatchInProgress) {
    await this.matchRepository.gameUpdateInProgress(id, input);
  }
}
