import { Router } from 'express';
import {
  listAllMatchesController,
  saveMatchController,
} from '../factories/controllers/match.factory';

const router = Router();

router.get('/', listAllMatchesController.getAll);
router.post('/', saveMatchController.saveMatch);

export default router;
