import ListTeamByIdUseCase from '../../../domain/use-cases/team/ListTeamById.usecase';
import ListAllTeamsUseCase from '../../../domain/use-cases/team/ListAllTeams.usecase';
import ListAllTeamsController from '../../controllers/team/ListAllTeams.conrtoller';
import ListTeamsByIdController from '../../controllers/team/ListTeamById.controller';
import SequelizeTeamRepository from '../../sequelize/repositories/Team.repository';

const teamRepository = new SequelizeTeamRepository();
const listtAllTeamsUseCase = new ListAllTeamsUseCase(teamRepository);
const listAllTeamsController = new ListAllTeamsController(listtAllTeamsUseCase);

const listTeamByIdUseCase = new ListTeamByIdUseCase(teamRepository);
const listTeamByIdController = new ListTeamsByIdController(listTeamByIdUseCase);

export { listAllTeamsController, listTeamByIdController };
