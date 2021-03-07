import { getCustomRepository } from 'typeorm';
import { Request, Response } from 'express';
import { SurveysRepository } from '../repositories/SurveysRepository';
import { AppError } from '../errors/AppError';
class SurveysController {
	async create(req: Request, res: Response) {
		const { title, description } = req.body;

		const repository = getCustomRepository(SurveysRepository);

		const survey = repository.create({ title, description });
		await repository.save(survey);

		return res.status(201).json({
			message: 'Survey created with success!',
			code: 200,
			survey: survey,
		});
	}

	async showAll(req: Request, res: Response) {
		const surveysRepository = getCustomRepository(SurveysRepository);

		const list = await surveysRepository.find();

		return res
			.status(200)
			.json({ code: 200, count: list.length, surveys: list });
	}
}

export { SurveysController };
