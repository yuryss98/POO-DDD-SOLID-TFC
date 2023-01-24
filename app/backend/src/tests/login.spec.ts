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
    const response = await chai
    .request(app)
    .post('/login')
    .send({ email: 'email@invalid.com', password: 'password' })

    expect(response.status).to.be.equal(401);
    expect(response.body).to.deep.equal({ message: 'Incorrect email or password' });
  });
  
  it('Should return a token and status 200 when logging in with valid credentials', async () => {
    sinon.stub(User, 'findOne').resolves({ dataValues: UserMock} as User);

    const response = await chai
      .request(app)
      .post('/login')
      .send({ email: 'test@test.com', password: 'secret_user' })

    expect(response.status).to.have.equal(200);
    expect(response.body).to.have.property('token');
  });
});
