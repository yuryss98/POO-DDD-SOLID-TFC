export interface IMatchSave {
  homeTeamId: number;
  homeTeamGoals: number;
  awayTeamId: number;
  awayTeamGoals: number;
}

export default interface IMatchDTO extends IMatchSave {
  id: number;
  inProgress: boolean;
  homeTeam: {
    teamName: string;
  };
  awayTeam: {
    teamName: string;
  };
}
