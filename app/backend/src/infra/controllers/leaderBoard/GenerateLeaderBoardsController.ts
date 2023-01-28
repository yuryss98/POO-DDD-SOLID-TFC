import { Request, Response } from 'express';
import { GenerateLeaderBoardUseCase } from '../../../domain/use-cases';

export default class GenerateLeaderBoardsController {
  constructor(private _generateLeaderBoardUseCase: GenerateLeaderBoardUseCase) { }

  generateLeaderBoard = async (req: Request, res: Response) => {
    if (req.url === '/home') {
      const leaderBoards = await this._generateLeaderBoardUseCase.execute('home');

      return res.status(200).json(leaderBoards);
    }

    if (req.url === '/away') {
      const leaderBoards = await this._generateLeaderBoardUseCase.execute('away');

      return res.status(200).json(leaderBoards);
    }

    const leaderBoards = await this._generateLeaderBoardUseCase.execute('general');

    return res.status(200).json(leaderBoards);
  };
}
