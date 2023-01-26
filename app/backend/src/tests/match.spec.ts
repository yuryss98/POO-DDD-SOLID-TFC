import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
import Match from '../database/models/Match'
import {
  finishedMatches,
  matchesInTime,
  newMatchInvalid,
  newMatchValid,
  createMatch
} from './mocks/MatchMock';
import * as Jwt from 'jsonwebtoken';
import UserMock, { mockToken } from './mocks/UserMock';
import User from '../database/models/User';

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
      sinon.stub(User, 'findOne').resolves({ dataValues: UserMock} as User);
  
      const login = await chai
        .request(app)
        .post('/login')
        .send({ email: 'test@test.com', password: 'secret_user' })
  
      const response = await chai
      .request(app)
      .post('/matches')
      .set('authorization', login.body.token)
      .send({})
  
      expect(response.status).to.be.equal(400);
      expect(response.body).to.deep.equal({ message: 'All fields must be filled' });
    });
  
    it('Should return status 422 when passing two equal teams', async () => {
      sinon.stub(User, 'findOne').resolves({ dataValues: UserMock} as User);
  
      const login = await chai
        .request(app)
        .post('/login')
        .send({ email: 'test@test.com', password: 'secret_user' })
  
      const response = await chai
      .request(app)
      .post('/matches')
      .set('authorization', login.body.token)
      .send(newMatchInvalid)
  
      expect(response.status).to.be.equal(422);
      expect(response.body).to.deep.equal({
        message: 'It is not possible to create a match with two equal teams'
      });
    });
  })
});
