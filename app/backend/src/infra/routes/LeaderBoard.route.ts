import { Router } from 'express';
import GenerateLeaderBoardUseCase
  from '../../domain/use-cases/leaderBoard/GenerateLeaderBoard.usecase';
import GenerateLeaderBoardsController
  from '../controllers/leaderBoard/GenerateLeaderBoardsController';
import SequelizeMatchRepository from '../sequelize/repositories/Match.repository';
import SequelizeTeamRepository from '../sequelize/repositories/Team.repository';

const router = Router();

const teamRepository = new SequelizeTeamRepository();
const matchRepository = new SequelizeMatchRepository();
const leaderBoardsUseCase = new GenerateLeaderBoardUseCase(matchRepository, teamRepository);

const leaderBoardsController = new GenerateLeaderBoardsController(leaderBoardsUseCase);

router.get('/home', leaderBoardsController.generateLeaderBoard);

export default router;
