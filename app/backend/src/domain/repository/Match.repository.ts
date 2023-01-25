import IMatchDTO from '../interfaces/IMatch';

export default abstract class MatchRepository {
  abstract findAll(query: string | undefined): Promise<IMatchDTO[]>;
}
