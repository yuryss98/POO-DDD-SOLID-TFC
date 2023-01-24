import Team from '../entities/Team';

export default abstract class TeamRepository {
  abstract findAll(): Promise<Team[]>;
}
