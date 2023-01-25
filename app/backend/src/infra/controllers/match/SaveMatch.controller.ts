import { Request, Response } from 'express';
import SaveMatchUseCase from '../../../domain/use-cases/match/SaveMatch.usecase';

export default class SaveMatchController {
  constructor(private _saveMatchUseCase: SaveMatchUseCase) { }

  saveMatch = async (req: Request, res: Response) => {
    const savedMatch = await this._saveMatchUseCase.execute(req.body);

    return res.status(201).json(savedMatch);
  };
}
