export default class Team {
  private _id: number;
  private _teamName: string;

  constructor() {
    this._id = 0;
    this._teamName = '';
  }

  get id() {
    return this._id;
  }

  get teamName() {
    return this._teamName;
  }
}
