import { Request, Response } from 'express';
import { GameUpdateInProgressUseCase } from '../../../domain/use-cases';

export default class GameUpdateInProgressController {
  constructor(private _gameUpdateInProgressUseCase: GameUpdateInProgressUseCase) { }

  gameUpdateInProgress = async (req: Request, res: Response) => {
    await this._gameUpdateInProgressUseCase.execute(Number(req.params.id), req.body);

    return res.status(200).json({ message: 'Game Updated' });
  };
}
