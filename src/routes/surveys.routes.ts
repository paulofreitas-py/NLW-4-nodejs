import { Router } from 'express';
import { SendMailController } from '../controllers/SendMailController';
import { SurveysController } from '../controllers/SurveysController';

const routes = Router();
const surveyController = new SurveysController();

const sendMailController = new SendMailController();

export default routes
	.post('/', surveyController.create)
	.post('/send', sendMailController.execute)
	.get('/', surveyController.showAll);
