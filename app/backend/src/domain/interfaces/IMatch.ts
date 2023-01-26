export interface IUpdateMatchInProgress {
  homeTeamGoals: number;
  awayTeamGoals: number;
}

export interface IMatchSave extends IUpdateMatchInProgress {
  homeTeamId: number;
  awayTeamId: number;
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
