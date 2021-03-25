const supertest = require('supertest');
const server = require('../server');

test('Welcome to Kenan Inc.', async () => {
	const res = await supertest(server).get('/');

	//assertions
	expect(res.statusCode).toBe(200);
});