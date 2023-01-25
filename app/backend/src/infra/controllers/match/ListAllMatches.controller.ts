import { Request, Response } from 'express';
import ListAllMatchesUseCase from '../../../domain/use-cases/match/ListAllMatches.usecase';

export default class ListAllMatchesController {
  constructor(private _listAllMatchesUseCase: ListAllMatchesUseCase) { }

  getAll = async (_req: Request, res: Response) => {
    const matches = await this._listAllMatchesUseCase.execute();

    return res.status(200).json(matches);
  };
}
