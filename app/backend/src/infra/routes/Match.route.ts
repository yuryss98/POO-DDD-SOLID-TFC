import { Router } from 'express';
import validateToken from '../middlewares/Validate.token';
import {
  listAllMatchesController,
  saveMatchController,
  finishAMatchContrller,
  gameUpdateInProgressController,
} from '../factories/controllers/match.factory';

const router = Router();

router.get('/', listAllMatchesController.getAll);
router.post('/', validateToken, saveMatchController.saveMatch);
router.patch('/:id/finish', finishAMatchContrller.finishMatch);
router.patch('/:id', gameUpdateInProgressController.gameUpdateInProgress);

export default router;
