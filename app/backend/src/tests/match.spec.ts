import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
import Match from '../database/models/Match'
import Team from '../database/models/Team';
import {
  finishedMatches,
  matchesInTime,
  newMatchValid,
  createMatch
} from './mocks/MatchMock';
import UserMock, { mockToken } from './mocks/UserMock';
import teamsMock from './mocks/TeamMock'

chai.use(chaiHttp);

const { expect } = chai;

describe('Tests the behaviors in the matches route', () => {
  afterEach(sinon.restore)

  describe('Method GET', () => {
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

  describe('Method POST', () => {
    const token = mockToken();

    it('Should return status 401 on not providing a token and not providing a valid token', async () => {
      let response = await chai
        .request(app)
        .post('/matches');
  
      expect(response.status).to.have.equal(401);
      expect(response.body).to.deep.equal({ message: 'Token not found' });
  
      response = await chai
        .request(app)
        .post('/matches')
        .set('authorization', 'Invalid Token');
  
      expect(response.status).to.have.equal(401);
      expect(response.body).to.deep.equal({ message: 'Token must be a valid token' });
    });
  
    it('Should return status 400 in not providing all fields in method post', async () => {
      const response = await chai
      .request(app)
      .post('/matches')
      .set('authorization', token)
      .send({})
  
      expect(response.status).to.be.equal(400);
      expect(response.body).to.deep.equal({ message: 'All fields must be filled' });
    });

    it('Should return status 404 when not finding a team', async () => {
      sinon.stub(Team, 'findAll').resolves(teamsMock as Team[]);

      const response = await chai
      .request(app)
      .post('/matches')
      .set('authorization', token)
      .send({
        ...newMatchValid,
        awayTeamId: 99999
      })
  
      expect(response.status).to.be.equal(404);
      expect(response.body).to.deep.equal({ message: 'There is no team with such id!' });
    });
  
    it('Should return status 422 when passing two equal teams', async () => {
      const response = await chai
      .request(app)
      .post('/matches')
      .set('authorization', token)
      .send({
        ...newMatchValid,
        awayTeamId: 1
      })
  
      expect(response.status).to.be.equal(422);
      expect(response.body).to.deep.equal({
        message: 'It is not possible to create a match with two equal teams'
      });
    });

    it('Should return status 201 and create a new match', async () => {
      sinon.stub(Team, 'findAll').resolves(teamsMock as Team[]);
      sinon.stub(Match, 'create').resolves({
        dataValues: { id: createMatch.id }
      } as any);

      const response = await chai
      .request(app)
      .post('/matches')
      .set('authorization', token)
      .send(newMatchValid)
  
      expect(response.status).to.be.equal(201);
      expect(response.body).to.deep.equal(createMatch);
    });
  })

  describe('Method PATCH', () => {
    it('should return status 200 when ending a match', async () => {
      sinon.stub(Match, 'update').resolves();

      const response = await chai
      .request(app)
      .patch('/matches/10/finish')
  
      expect(response.status).to.be.equal(200);
      expect(response.body).to.deep.equal({ message: 'Finished' });
    });

    it('should return status 200 and change match status', async () => {
      sinon.stub(Match, 'update').resolves();

      const response = await chai
      .request(app)
      .patch('/matches/10')
      .send({ homeTeamGoals: 5,awayTeamGoals: 5 })
  
      expect(response.status).to.be.equal(200);
      expect(response.body).to.deep.equal({ message: 'Game Updated' });
    });
  })
});
