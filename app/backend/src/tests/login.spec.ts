import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
import User from '../database/models/User'
import UserMock from './mocks/UserMock';


chai.use(chaiHttp);

const { expect } = chai;

describe('Testing login behavior', () => {
  afterEach(sinon.restore)

  it('Should return status 400 when not informing the email field', async () => {
    const response = await chai
    .request(app)
    .post('/login')
    .send({ password: 'password' })

    expect(response.status).to.be.equal(400);
    expect(response.body).to.deep.equal({ message: 'All fields must be filled' });
  });

  it('Should return status 400 when not informing the password field', async () => {
    const response = await chai
    .request(app)
    .post('/login')
    .send({ email: 'email@email.com' })

    expect(response.status).to.be.equal(400);
    expect(response.body).to.deep.equal({ message: 'All fields must be filled' });
  });

  it('should return status 401 when informing an email in invalid format', async () => {
    const response = await chai
    .request(app)
    .post('/login')
    .send({ email: 'emailInvalid', password: 'password' })

    expect(response.status).to.be.equal(401);
    expect(response.body).to.deep.equal({ message: 'Incorrect email or password' });
  });

  it('should return status 401 when informing an email in invalid', async () => {
    sinon.stub(User, 'findOne').resolves({ dataValues: UserMock} as User);

    const response = await chai
    .request(app)
    .post('/login')
    .send({ email: 'email@invalid.com', password: 'password' })

    expect(response.status).to.be.equal(401);
    expect(response.body).to.deep.equal({ message: 'Incorrect email or password' });
  });

  it('should return status 401 on not providing a token and not providing a valid token', async () => {
    let response = await chai
      .request(app)
      .get('/login/validate');

    expect(response.status).to.have.equal(401);
    expect(response.body).to.deep.equal({ message: 'Token not found' });

    response = await chai
      .request(app)
      .get('/login/validate')
      .set('authorization', 'Invalid token');

    expect(response.status).to.have.equal(401);
    expect(response.body).to.deep.equal({ message: 'Token must be a valid token' });
  });

  it(`Should return a token and status 200 when logging in with valid
  credentials and returning user role`, async () => {
    sinon.stub(User, 'findOne').resolves({ dataValues: UserMock} as User);

    const login = await chai
      .request(app)
      .post('/login')
      .send({ email: 'test@test.com', password: 'secret_user' })

    expect(login.status).to.have.equal(200);
    expect(login.body).to.have.property('token');

    const getRole = await chai
      .request(app)
      .get('/login/validate')
      .set('authorization', login.body.token)

    expect(getRole.status).to.equal(200);
    expect(getRole.body).to.deep.equal({ role: 'admin' })
  });
});
