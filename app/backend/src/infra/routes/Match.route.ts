import { Router } from 'express';
import listAllMatchesController from '../factories/controllers/match.factory';

const router = Router();

router.get('/', listAllMatchesController.getAll);

export default router;
