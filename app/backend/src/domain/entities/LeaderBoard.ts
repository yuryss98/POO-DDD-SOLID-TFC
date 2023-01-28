import { IMatchDTO } from '../interfaces';

export default class LeaderBoard {
  name = '';
  totalPoints = 0;
  totalGames = 0;
  totalVictories = 0;
  totalDraws = 0;
  totalLosses = 0;
  goalsFavor = 0;
  goalsOwn = 0;
  goalsBalance = 0;
  efficiency = '';

  constructor(teamName: string, finishedMatches: IMatchDTO[], inHome: string) {
    this.name = teamName;
    this.generate(finishedMatches, inHome);
  }

  generate(finishedMatches: IMatchDTO[], inHome: string | undefined) {
    this.checkWhatRatingYouShouldGet(inHome, finishedMatches);
    this.calculate();
  }

  checkWhatRatingYouShouldGet(inHome: string | undefined, finishedMatches: IMatchDTO[]) {
    if (inHome === 'home') return this.getHomeTeamRating(finishedMatches);
    if (inHome === 'away') return this.getAwayTeamRating(finishedMatches);

    this.getHomeTeamRating(finishedMatches);
    this.getAwayTeamRating(finishedMatches);
  }

  getHomeTeamRating(finishedMatches: IMatchDTO[]) {
    finishedMatches.forEach((match) => {
      if (match.homeTeam.teamName === this.name) {
        this.totalGames += 1;
        this.goalsFavor += match.homeTeamGoals;
        this.goalsOwn += match.awayTeamGoals;
        this.getScore(match.homeTeamGoals, match.awayTeamGoals, true);
      }
    });
  }

  getAwayTeamRating(finishedMatches: IMatchDTO[]) {
    finishedMatches.forEach((match) => {
      if (match.awayTeam.teamName === this.name) {
        this.totalGames += 1;
        this.goalsFavor += match.awayTeamGoals;
        this.goalsOwn += match.homeTeamGoals;
        this.getScore(match.homeTeamGoals, match.awayTeamGoals, false);
      }
    });
  }

  getScore(homeTeamGoals: number, awayTeamGoals: number, inHome: boolean) {
    const goalsFavor = inHome ? homeTeamGoals : awayTeamGoals;
    const goalsOwn = inHome ? awayTeamGoals : homeTeamGoals;

    if (goalsFavor > goalsOwn) this.totalVictories += 1;
    if (goalsFavor < goalsOwn) this.totalLosses += 1;
    if (goalsFavor === goalsOwn) this.totalDraws += 1;
  }

  calculate() {
    const points = this.totalVictories * 3 + this.totalDraws;
    const goalsBalance = this.goalsFavor - this.goalsOwn;
    const efficiency = (points / (this.totalGames * 3)) * 100;

    this.totalPoints = points;
    this.goalsBalance = goalsBalance;
    this.efficiency = efficiency.toFixed(2);
  }
}
