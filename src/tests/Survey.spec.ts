import { getConnection } from 'typeorm';
import request from 'supertest';
import { app } from '../app';

import { create } from '../database';

describe('Surveys', () => {
	beforeAll(async () => {
		const connection = await create();

		try {
			await connection.runMigrations();
		} catch (error) {
			console.log('Already have migrations!');
		}
	});

	afterAll(async () => {
		const connection = getConnection();
		await connection.dropDatabase();
		await connection.close();
	});

	it('Should be able to create a new survey', async () => {
		const response = await request(app)
			.post('/api/surveys') // Route to test
			.send({
				// Data to send
				title: 'Title of Survey',
				description: 'Description of Survey',
			});

		expect(response.status).toBe(201);
	});

	it('Should be able to get all surveys', async () => {
		const response = await request(app).get('/api/surveys'); // Route to test

		expect(response.status).toBe(200);
		expect(response.body).toHaveProperty('count');
	});
});
