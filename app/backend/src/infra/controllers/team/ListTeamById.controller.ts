import { Request, Response } from 'express';
import ListTeamByIdUseCase from '../../../domain/use-cases/team/ListTeamById.usecase';

export default class ListTeamsByIdController {
  constructor(private _listTeamByIdUseCase: ListTeamByIdUseCase) { }

  getById = async (req: Request, res: Response) => {
    const team = await this._listTeamByIdUseCase.execute(Number(req.params.id));

    return res.status(200).json(team);
  };
}
