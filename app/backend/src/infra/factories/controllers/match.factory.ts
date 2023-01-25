import SequelizeMatchRepository from '../../sequelize/repositories/Match.repository';
import ListAllMatchesUseCase from '../../../domain/use-cases/match/ListAllMatches.usecase';
import ListAllMatchesController from '../../controllers/match/ListAllMatches.controller';
import SaveMatchController from '../../controllers/match/SaveMatch.controller';
import SaveMatchUseCase from '../../../domain/use-cases/match/SaveMatch.usecase';

const matchRepository = new SequelizeMatchRepository();
const listAllMatchesUseCase = new ListAllMatchesUseCase(matchRepository);
const listAllMatchesController = new ListAllMatchesController(listAllMatchesUseCase);

const saveMatchUseCase = new SaveMatchUseCase(matchRepository);
const saveMatchController = new SaveMatchController(saveMatchUseCase);

export { listAllMatchesController, saveMatchController };
