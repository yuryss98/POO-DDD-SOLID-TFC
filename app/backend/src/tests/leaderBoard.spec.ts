import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
import Team from '../database/models/Team'
import Match from '../database/models/Match';
import { finishedMatches } from './mocks/MatchMock';
import TeamsMock from './mocks/TeamMock';
import { awayTeamGames, homeTeamsGames, generalLeaderBoards } from './mocks/LeaderBoardMock'


chai.use(chaiHttp);

const { expect } = chai;

describe('Testing login behavior', () => {
  beforeEach(() => {
    sinon.stub(Team, 'findAll').resolves(TeamsMock as any);
    sinon.stub(Match, 'findAll').resolves(finishedMatches as any);
  });

  afterEach(sinon.restore);

  it('Should return home teams leaderboard', async () => {
    const response = await chai
    .request(app)
    .get('/leaderboard/home');

    expect(response.status).to.equal(200);
    expect(response.body).to.deep.equal(homeTeamsGames);
  });

  it('Should return to the visiting teams leaderboard', async () => {
    const response = await chai
    .request(app)
    .get('/leaderboard/away');

    expect(response.status).to.equal(200);
    expect(response.body).to.deep.equal(awayTeamGames);
  });

  it('Should return general teams leaderboard', async () => {
    const response = await chai
    .request(app)
    .get('/leaderboard');

    expect(response.status).to.equal(200);
    expect(response.body).to.deep.equal(generalLeaderBoards)
  });
});