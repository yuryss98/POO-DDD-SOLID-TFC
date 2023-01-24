import { Router } from 'express';
import ListTeamByIdUseCase from '../../domain/use-cases/team/ListTeamById.usecase';
import ListAllTeamsUseCase from '../../domain/use-cases/team/ListAllTeams.usecase';
import ListAllTeamsController from '../controllers/team/ListAllTeams.conrtoller';
import ListTeamsByIdController from '../controllers/team/ListTeamById.controller';
import SequelizeTeamRepository from '../sequelize/repositories/Team.repository';

const router = Router();

const teamRepository = new SequelizeTeamRepository();
const letAllTeamsUseCase = new ListAllTeamsUseCase(teamRepository);
const teamController = new ListAllTeamsController(letAllTeamsUseCase);

const listTeamsByIdUseCase = new ListTeamByIdUseCase(teamRepository);
const listTeamByIdController = new ListTeamsByIdController(listTeamsByIdUseCase);

router.get('/', teamController.getAll);
router.get('/:id', listTeamByIdController.getById);

export default router;
