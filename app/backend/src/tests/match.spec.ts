import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
import Match from '../database/models/Match'
import { finishedMatches, matchesInTime } from './mocks/MatchMock';


chai.use(chaiHttp);

const { expect } = chai;

describe('Tests the behaviors in the matches route', () => {
  afterEach(sinon.restore)

  it('Should return status 200 and list all matches', async () => {
    sinon.stub(Match, 'findAll').resolves([
      ...matchesInTime,
      ...finishedMatches
    ] as any);

    const response = await chai
    .request(app)
    .get('/matches')

    expect(response.status).to.be.equal(200);
    expect(response.body).to.deep.equal([
      ...matchesInTime,
      ...finishedMatches
    ]);
  });

  it('Should return status 200 and list all ongoing matches', async () => {
    sinon.stub(Match, 'findAll').resolves(matchesInTime as any);

    const response = await chai
    .request(app)
    .get('/matches?inProgress=true')

    expect(response.status).to.be.equal(200);
    expect(response.body).to.deep.equal(matchesInTime);
  });

  it('Should return status 200 and list all completed matches', async () => {
    sinon.stub(Match, 'findAll').resolves(finishedMatches as any);

    const response = await chai
    .request(app)
    .get('/matches?inProgress=false')

    expect(response.status).to.be.equal(200);
    expect(response.body).to.deep.equal(finishedMatches);
  });
});
