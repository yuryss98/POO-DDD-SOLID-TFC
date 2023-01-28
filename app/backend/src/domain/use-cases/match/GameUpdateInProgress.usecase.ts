import { IUpdateMatchInProgress } from '../../interfaces';
import { MatchRepository } from '../../repository';

export default class GameUpdateInProgressUseCase {
  constructor(private matchRepository: MatchRepository) { }

  async execute(id: number, input: IUpdateMatchInProgress) {
    await this.matchRepository.gameUpdateInProgress(id, input);
  }
}
