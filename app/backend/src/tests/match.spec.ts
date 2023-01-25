import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
import Match from '../database/models/Match'
import MatchMock from './mocks/MatchMock';


chai.use(chaiHttp);

const { expect } = chai;

describe('Tests the behaviors in the matches route', () => {
  afterEach(sinon.restore)

  it('Should return status 200 and list all matches', async () => {
    sinon.stub(Match, 'findAll').resolves(MatchMock as any);

    const response = await chai
    .request(app)
    .get('/matches')

    expect(response.status).to.be.equal(200);
    expect(response.body).to.deep.equal(MatchMock);
  });
});
