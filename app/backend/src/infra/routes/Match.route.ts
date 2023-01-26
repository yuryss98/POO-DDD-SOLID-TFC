import { Router } from 'express';
import {
  listAllMatchesController,
  saveMatchController,
  finishAMatchContrller,
} from '../factories/controllers/match.factory';
import validateToken from '../middlewares/Validate.token';

const router = Router();

router.get('/', listAllMatchesController.getAll);
router.post('/', validateToken, saveMatchController.saveMatch);
router.patch('/:id/finish', finishAMatchContrller.finishMatch);

export default router;
