import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
import Team from '../database/models/Team'
import TeamMock from './mocks/TeamMock';


chai.use(chaiHttp);

const { expect } = chai;

describe('Tests the behaviors in the teams route', () => {
  afterEach(sinon.restore)

  it('Should return status 200 and list all teams', async () => {
    sinon.stub(Team, 'findAll').resolves(TeamMock as Team[]);

    const response = await chai
    .request(app)
    .get('/teams')

    expect(response.status).to.be.equal(200);
    expect(response.body).to.deep.equal(TeamMock);
  });

  it('Should return status 200 and list a team by id', async () => {
    sinon.stub(Team, 'findByPk').resolves(TeamMock[4] as Team);

    const response = await chai
    .request(app)
    .get('/teams/5')

    expect(response.status).to.be.equal(200);
    expect(response.body).to.deep.equal(TeamMock[4]);
  });
});
