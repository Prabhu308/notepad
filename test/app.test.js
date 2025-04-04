// test/app.test.js
const request = require('supertest');
const { expect } = require('chai'); // This will work with CommonJS
const app = require('../app'); // Adjust the path as necessary

describe('GET /', () => {
    it('responds with Hello World!', async () => {
        const response = await request(app).get('/');
        expect(response.text).to.equal('Hello World!'); // Use Chai's expect
    });
});