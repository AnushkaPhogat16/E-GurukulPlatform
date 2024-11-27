const request = require('supertest');
const app = require('../app'); // Assuming your Express app is exported from app.js

describe('Auth API', () => {
  it('should log in a user successfully', async () => {
    const res = await request(app)
      .post('/api/auth/login')
      .send({ email: 'test@example.com', password: 'password' });
    expect(res.status).to.equal(200);
    expect(res.body).to.have.property('token');
  });
});
