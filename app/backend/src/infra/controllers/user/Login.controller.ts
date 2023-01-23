import { Request, Response } from 'express';
import LoginUseCase from '../../../domain/use-cases/user/Login.usecase';

export default class LoginController {
  constructor(private _LoginUseCase: LoginUseCase) { }

  login = async (req: Request, res: Response) => {
    const token = await this._LoginUseCase.execute(req.body);

    return res.status(200).json({ token });
  };

  role = async (req: Request, res: Response) => {
    const { role } = req.body.user.data;

    return res.status(200).json({ role });
  };
}
