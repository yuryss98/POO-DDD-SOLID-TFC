import { Router } from 'express';
import LoginUseCase from '../../domain/use-cases/user/Login.usecase';
import AuthService from '../auth/Token';
import LoginController from '../controllers/user/Login.controller';
import validateToken from '../middlewares/Validate.token';
import SequelizeUserRepository from '../sequelize/repositories/User.repository';

const router = Router();

const usermodel = new SequelizeUserRepository();
const authService = new AuthService();
const loginUseCase = new LoginUseCase(usermodel, authService);
const loginController = new LoginController(loginUseCase);

router.get('/validate', validateToken, loginController.role);
router.post('/', loginController.login);

export default router;
