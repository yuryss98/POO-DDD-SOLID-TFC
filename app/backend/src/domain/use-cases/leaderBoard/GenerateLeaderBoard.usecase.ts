import LeaderBoard from '../../entities/LeaderBoard';
import { MatchRepository, TeamRepository } from '../../repository';

export default class GenerateLeaderBoardUseCase {
  constructor(
    private _matchRepository: MatchRepository,
    private _teamRepository: TeamRepository,
  ) { }

  async execute(inHome: 'home' | 'away' | 'general') {
    const finishedMatches = await this._matchRepository.findAll('false');
    const teams = await this._teamRepository.findAll();
    const getAllLeaderBoards = teams.map(
      (team) => new LeaderBoard(team.teamName, finishedMatches, inHome),
    );

    return getAllLeaderBoards.sort((a, b) => (
      b.totalPoints - a.totalPoints
      || b.totalVictories - a.totalVictories
      || b.goalsBalance - a.goalsBalance
      || b.goalsFavor - a.goalsFavor
      || b.goalsOwn - a.goalsOwn

    ));
  }
}
