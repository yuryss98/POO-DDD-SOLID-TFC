import { Request, Response } from 'express';
import GenerateLeaderBoardUseCase
  from '../../../domain/use-cases/leaderBoard/GenerateLeaderBoard.usecase';

export default class GenerateLeaderBoardsController {
  constructor(private _generateLeaderBoardUseCase: GenerateLeaderBoardUseCase) { }

  generateLeaderBoard = async (_req: Request, res: Response) => {
    const leaderBoards = await this._generateLeaderBoardUseCase.execute();

    return res.status(200).json(leaderBoards);
  };
}
