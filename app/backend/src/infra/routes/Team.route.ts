import { Router } from 'express';
import ListAllTeamsUseCase from '../../domain/use-cases/team/ListAllTeams.usecase';
import ListAllTeamsController from '../controllers/team/ListAllTeams.conrtoller';
import SequelizeTeamRepository from '../sequelize/repositories/Team.repository';

const router = Router();

const teamRepository = new SequelizeTeamRepository();
const letAllTeamsUseCase = new ListAllTeamsUseCase(teamRepository);
const teamController = new ListAllTeamsController(letAllTeamsUseCase);

router.get('/', teamController.getAll);

export default router;
