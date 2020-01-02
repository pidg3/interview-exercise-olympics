const server = require('./app').server;
const request = require('supertest');

// close the server after each test
afterEach(() => {
  server.close();
});

describe('/medals endpoint', () => {
  it('should respond as expected', async () => {
    const response = await request(server).get('/medals');
    expect(response.body.length).toBe(10);
    expect(response.body[0].Name).toBe('Juhamatti Tapio Aaltonen');
  });
});
