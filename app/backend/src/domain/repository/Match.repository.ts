import IMatchDTO, { IMatchSave } from '../interfaces/IMatch';

export default abstract class MatchRepository {
  abstract findAll(query: string | undefined): Promise<IMatchDTO[]>;
  abstract saveMatch(match: IMatchSave): Promise<number>;
}
