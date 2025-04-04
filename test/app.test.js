// test/app.test.js
const request = require('supertest');
const app = require('../app'); // Adjust the path as necessary

describe('GET /', () => {
    it('responds with Hello World!', async () => {
        const response = await request(app).get('/');
        expect(response.text).toBe('Hello World!');
    });
});