import { Router } from 'express';
import {
  listAllMatchesController,
  saveMatchController,
  finishAMatchContrller,
  gameUpdateInProgressController,
} from '../factories/controllers/match.factory';
import validateToken from '../middlewares/Validate.token';

const router = Router();

router.get('/', listAllMatchesController.getAll);
router.post('/', validateToken, saveMatchController.saveMatch);
router.patch('/:id/finish', finishAMatchContrller.finishMatch);
router.patch('/:id', gameUpdateInProgressController.gameUpdateInProgress);

export default router;
