import { ITeamDTO } from '../interfaces';

export default abstract class TeamRepository {
  abstract findAll(): Promise<ITeamDTO[]>;
  abstract findById(id: number): Promise<ITeamDTO>;
}
