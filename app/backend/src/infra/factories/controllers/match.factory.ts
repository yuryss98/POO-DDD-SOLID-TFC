import {
  ListAllMatchesUseCase,
  SaveMatchUseCase,
  FinishAMatchUseCase,
  GameUpdateInProgressUseCase,
} from '../../../domain/use-cases';

import {
  SequelizeMatchRepository,
  SequelizeTeamRepository,
} from '../../sequelize';

import {
  ListAllMatchesController,
  SaveMatchController,
  FinishAMatchController,
  GameUpdateInProgressController,
} from '../../controllers';

const matchRepository = new SequelizeMatchRepository();
const listAllMatchesUseCase = new ListAllMatchesUseCase(matchRepository);
const listAllMatchesController = new ListAllMatchesController(listAllMatchesUseCase);

const teamRepository = new SequelizeTeamRepository();
const saveMatchUseCase = new SaveMatchUseCase(matchRepository, teamRepository);
const saveMatchController = new SaveMatchController(saveMatchUseCase);

const finishAMatchUseCase = new FinishAMatchUseCase(matchRepository);
const finishAMatchContrller = new FinishAMatchController(finishAMatchUseCase);

const gameUpdateInProgressUseCase = new GameUpdateInProgressUseCase(matchRepository);
const gameUpdateInProgressController = new GameUpdateInProgressController(
  gameUpdateInProgressUseCase,
);

export {
  listAllMatchesController,
  saveMatchController,
  finishAMatchContrller,
  gameUpdateInProgressController,
};
