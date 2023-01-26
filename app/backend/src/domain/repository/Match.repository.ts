import IMatchDTO, { IMatchSave, IUpdateMatchInProgress } from '../interfaces/IMatch';

export default abstract class MatchRepository {
  abstract findAll(query: string | undefined): Promise<IMatchDTO[]>;
  abstract saveMatch(match: IMatchSave): Promise<number>;
  abstract finishMatch(id: number): Promise<void>;
  abstract gameUpdateInProgress(id: number, input: IUpdateMatchInProgress): Promise<void>;
}
