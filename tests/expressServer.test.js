const request = require('supertest');
const app = require('..expressServer');

describe('GET /', () => {
    it('should return express server with hello world', async()=> {
        const response = await request(app).get('/');
        expect(response.status).toBe(200);
        expect(response.text).toBe('hello world');
    })
})