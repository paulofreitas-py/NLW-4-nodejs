import { getCustomRepository } from 'typeorm';
import { Request, Response } from 'express';
import { SurveysUsersRepository } from '../repositories/SurveysUsersRepository';
import { AppError } from '../errors/AppError';
class AnswerController {
	async execute(req: Request, res: Response) {
		const { value } = req.params;
		const { id } = req.query;

		const repository = getCustomRepository(SurveysUsersRepository);

		const result = await repository.findOne({ id: String(id) });

		if (!result) {
			throw new AppError('Survey user not found', 404);
		}

		result.value = Number(value);
		await repository.save(result);

		return res.status(200).json({
			code: 200,
			message: 'Your opinion has saved with success',
			survey: result,
		});
	}
}

export { AnswerController };
