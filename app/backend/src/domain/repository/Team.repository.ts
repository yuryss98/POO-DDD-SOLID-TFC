import ITeamDTO from '../interfaces/ITeam';

export default abstract class TeamRepository {
  abstract findAll(): Promise<ITeamDTO[]>;
}
