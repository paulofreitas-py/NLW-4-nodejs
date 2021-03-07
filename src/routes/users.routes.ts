import { Router } from 'express';
import { UserController } from '../controllers/UserController';

const routes = Router();
const userController = new UserController();

export default routes.post('/', userController.create);
