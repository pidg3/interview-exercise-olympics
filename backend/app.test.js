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

  it('should filter by name', async () => {
    const response = await request(server).get('/medals?name=Paavo%20Johannes%20Aaltonen');
    expect(response.body.length).toBe(5);
    expect(response.body[0].Event).toBe('Gymnastics Men\'s Individual All-Around');
  });

  it('should filter by year', async () => {
    const response = await request(server).get('/medals?year=1948%20Summer');
    expect(response.body.length).toBe(10);
    expect(response.body[9].Name).toBe('Nasuh Akar');
  });

  it('should filter by event', async () => {
    const response = await request(server).get('/medals?event=Athletics%20Men%27s%204%20x%20100%20metres%20Relay');
    expect(response.body.length).toBe(10);
    expect(response.body[0].Name).toBe('Olapade Charles Adeniken');
  });
});