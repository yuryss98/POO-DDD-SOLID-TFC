import { SequelizeTeamRepository } from '../../sequelize';
import { ListTeamsByIdController, ListAllTeamsController } from '../../controllers';
import { ListAllTeamsUseCase, ListTeamByIdUseCase } from '../../../domain/use-cases';

const teamRepository = new SequelizeTeamRepository();
const listtAllTeamsUseCase = new ListAllTeamsUseCase(teamRepository);
const listAllTeamsController = new ListAllTeamsController(listtAllTeamsUseCase);

const listTeamByIdUseCase = new ListTeamByIdUseCase(teamRepository);
const listTeamByIdController = new ListTeamsByIdController(listTeamByIdUseCase);

export { listAllTeamsController, listTeamByIdController };
