import { Request, Response } from 'express';
import { ListAllTeamsUseCase } from '../../../domain/use-cases';

export default class ListAllTeamsController {
  constructor(private _ListAllTeamsUseCase: ListAllTeamsUseCase) { }

  getAll = async (_req: Request, res: Response) => {
    const teams = await this._ListAllTeamsUseCase.execute();

    return res.status(200).json(teams);
  };
}
