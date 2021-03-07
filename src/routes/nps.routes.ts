import { Router } from 'express';
import { NpsController } from '../controllers/NpsController';
import { SendMailController } from '../controllers/SendMailController';
import { SurveysController } from '../controllers/SurveysController';

const routes = Router();
const controller = new NpsController();

export default routes.get('/:survey', controller.execute);
