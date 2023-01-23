import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';


chai.use(chaiHttp);

const { expect } = chai;

describe('Testing login behavior', () => {
  afterEach(sinon.restore);

  it('should return status 400', async () => {
    const response = await chai
    .request(app)
    .post('/login')
    .send({ password: 'hsauhsauhdusahd' })

    expect(response.status).to.be.equal(400);
    expect(response.body).to.deep.equal({ message: 'All fields must be filled' })
  });
});
