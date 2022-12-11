import { Router } from 'express';
import validateRegisterFields from '../middleware/validateRegisterFields';
import UserController from '../controller/UserController';

const router = Router();
const controller = new UserController();

router.post('/register', validateRegisterFields, controller.register);

export default router;
