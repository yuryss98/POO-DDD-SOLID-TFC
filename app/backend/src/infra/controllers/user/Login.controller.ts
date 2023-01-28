import { Request, Response } from 'express';
import { IDecode } from '../../middlewares/Validate.token';
import { LoginUseCase } from '../../../domain/use-cases';

export default class LoginController {
  constructor(private _LoginUseCase: LoginUseCase) { }

  login = async (req: Request, res: Response) => {
    const token = await this._LoginUseCase.execute(req.body);

    return res.status(200).json({ token });
  };

  role = async (req: Request, res: Response) => {
    const { role } = (req as IDecode).user;

    return res.status(200).json({ role });
  };
}
