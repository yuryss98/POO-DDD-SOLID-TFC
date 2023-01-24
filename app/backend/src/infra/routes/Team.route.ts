import { Router } from 'express';
import {
  listAllTeamsController,
  listTeamByIdController,
} from '../factories/controllers/team.factory';

const router = Router();

router.get('/', listAllTeamsController.getAll);
router.get('/:id', listTeamByIdController.getById);

export default router;
