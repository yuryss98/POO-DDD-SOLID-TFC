import IMatchDTO from '../interfaces/IMatch';

export default abstract class MatchRepository {
  abstract findAll(): Promise<IMatchDTO[]>;
}
