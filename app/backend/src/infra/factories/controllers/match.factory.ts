import SequelizeMatchRepository from '../../sequelize/repositories/Match.repository';
import ListAllMatchesUseCase from '../../../domain/use-cases/match/ListAllMatches.usecase';
import ListAllMatchesController from '../../controllers/match/ListAllMatches.controller';

const matchRepository = new SequelizeMatchRepository();
const listAllMatchesUseCase = new ListAllMatchesUseCase(matchRepository);
const listAllMatchesController = new ListAllMatchesController(listAllMatchesUseCase);

export default listAllMatchesController;
