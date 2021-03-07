import { Router, Response, Request } from 'express';

import userRoutes from './users.routes';
import surveyRoutes from './surveys.routes';
import npsRoutes from './nps.routes';
import { AnswerController } from '../controllers/AnswerController';

const routes = Router();

const answerController = new AnswerController();

routes
	.get('/', (req: Request, res: Response) => {
		return res.json({ status: 'API is working' });
	})
	.use('/users', userRoutes)
	.use('/surveys', surveyRoutes)
	.use('/nps', npsRoutes)
	.get('/answers/:value', answerController.execute);

export default routes;
