import { Router } from 'express';
import { SequelizeTeamRepository, SequelizeMatchRepository } from '../sequelize';
import { GenerateLeaderBoardUseCase } from '../../domain/use-cases';
import { GenerateLeaderBoardsController } from '../controllers';

const router = Router();

const teamRepository = new SequelizeTeamRepository();
const matchRepository = new SequelizeMatchRepository();
const leaderBoardsUseCase = new GenerateLeaderBoardUseCase(matchRepository, teamRepository);

const leaderBoardsController = new GenerateLeaderBoardsController(leaderBoardsUseCase);

router.get('/home', leaderBoardsController.generateLeaderBoard);
router.get('/away', leaderBoardsController.generateLeaderBoard);
router.get('/', leaderBoardsController.generateLeaderBoard);

export default router;
