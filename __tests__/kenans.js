const supertest = require('supertest');
const server = require('../server');
const db = require('../data/config');

beforeEach(async () => {
	await db.seed.run();
});

beforeAll(async () => {
	await db.migrate.rollback();
	await db.migrate.latest();
});

afterAll(async () => {
	await db.destroy();
});

describe('Kenan Limitted LCC intergration test', () => {
	it('gets a list of Kenans', async () => {
		const res = await supertest(server).get('/kenans');
		expect(res.statusCode).toBe(200);
		expect(res.type).toBe('application/json');
		expect(res.body.length).toBeGreaterThanOrEqual(4);
		expect(res.body[0].name).toBe('Kenan Dolic');
	});

	it('Gets Kenan by Id', async () => {
		const res = await supertest(server).get('/kenans/1');
		expect(res.statusCode).toBe(200);
		expect(res.type).toBe('application/json');
		expect(res.body.id).toBe(1);
		expect(res.body.name).toBe('Kenan Dolic');
	});

	it('returns 404 when Kenan is not found', async () => {
		const res = await supertest(server).get('/kenans/100');
		expect(res.statusCode).toBe(404);
	});

	it('creates a Kenan', async () => {
		const res = await supertest(server).post('/kenans').send({ name: 'Kenan4 Dolic' });
		expect(res.statusCode).toBe(201);
		expect(res.type).toBe('application/json');
		expect(res.body.id).toBeDefined();
		expect(res.body.name).toBe('Kenan4 Dolic');
	});

	it('Deletes a Kenan', async () => {
		const res = await supertest(server).del('/kenans/4');
		expect(res.statusCode).toBe(200);
		expect(res.body.message).toBe('In the bleak--');
	});
});