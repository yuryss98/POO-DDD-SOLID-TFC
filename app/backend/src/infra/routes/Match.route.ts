import { Router } from 'express';
import {
  listAllMatchesController,
  saveMatchController,
} from '../factories/controllers/match.factory';
import validateToken from '../middlewares/Validate.token';

const router = Router();

router.get('/', listAllMatchesController.getAll);
router.post('/', validateToken, saveMatchController.saveMatch);

export default router;
