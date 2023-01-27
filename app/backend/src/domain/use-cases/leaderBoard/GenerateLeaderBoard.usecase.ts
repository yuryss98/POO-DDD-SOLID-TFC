import LeaderBoard from '../../entities/LeaderBoard';
import MatchRepository from '../../repository/Match.repository';
import TeamRepository from '../../repository/Team.repository';

export default class GenerateLeaderBoardUseCase {
  constructor(
    private _matchRepository: MatchRepository,
    private _teamRepository: TeamRepository,
  ) { }

  async execute() {
    const finishedMatches = await this._matchRepository.findAll('false');
    const teams = await this._teamRepository.findAll();
    const getAllLeaderBoards = teams.map((team) => new LeaderBoard(team.teamName, finishedMatches));

    return getAllLeaderBoards.sort((a, b) => (
      b.totalPoints - a.totalPoints
      || b.totalVictories - a.totalVictories
      || b.goalsBalance - a.goalsBalance
      || b.goalsFavor - a.goalsFavor
      || b.goalsOwn - a.goalsOwn

    ));
  }
}
