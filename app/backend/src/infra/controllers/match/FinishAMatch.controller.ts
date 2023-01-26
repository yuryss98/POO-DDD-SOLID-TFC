import { Request, Response } from 'express';
import FinishAMatchUseCase from '../../../domain/use-cases/match/FinishAMatch.usecase';

export default class ListAllMatchesController {
  constructor(private _FinishAMatchUseCase: FinishAMatchUseCase) { }

  finishMatch = async (req: Request, res: Response) => {
    await this._FinishAMatchUseCase.execute(Number(req.params.id));

    return res.status(200).json({ message: 'Finished' });
  };
}
