import SequelizeMatchRepository from '../../sequelize/repositories/Match.repository';
import ListAllMatchesUseCase from '../../../domain/use-cases/match/ListAllMatches.usecase';
import ListAllMatchesController from '../../controllers/match/ListAllMatches.controller';
import SaveMatchController from '../../controllers/match/SaveMatch.controller';
import SaveMatchUseCase from '../../../domain/use-cases/match/SaveMatch.usecase';
import SequelizeTeamRepository from '../../sequelize/repositories/Team.repository';
import FinishAMatchController from '../../controllers/match/FinishAMatch.controller';
import FinishAMatchUseCase from '../../../domain/use-cases/match/FinishAMatch.usecase';

const matchRepository = new SequelizeMatchRepository();
const listAllMatchesUseCase = new ListAllMatchesUseCase(matchRepository);
const listAllMatchesController = new ListAllMatchesController(listAllMatchesUseCase);

const teamRepository = new SequelizeTeamRepository();
const saveMatchUseCase = new SaveMatchUseCase(matchRepository, teamRepository);
const saveMatchController = new SaveMatchController(saveMatchUseCase);

const finishAMatchUseCase = new FinishAMatchUseCase(matchRepository);
const finishAMatchContrller = new FinishAMatchController(finishAMatchUseCase);

export { listAllMatchesController, saveMatchController, finishAMatchContrller };
