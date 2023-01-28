import { Router } from 'express';
import AuthService from '../auth/Token';
import DecryptPassword from '../Bcrypt/Decrypt.password';
import validateToken from '../middlewares/Validate.token';
import { SequelizeUserRepository } from '../sequelize';
import { LoginUseCase } from '../../domain/use-cases';
import { LoginController } from '../controllers';

const router = Router();

const usermodel = new SequelizeUserRepository();
const authService = new AuthService();
const decryptPassowrd = new DecryptPassword();
const loginUseCase = new LoginUseCase(usermodel, authService, decryptPassowrd);
const loginController = new LoginController(loginUseCase);

router.get('/validate', validateToken, loginController.role);
router.post('/', loginController.login);

export default router;
