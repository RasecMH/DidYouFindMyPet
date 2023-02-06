import { Router } from 'express';
import validateLoginFields from '../middleware/validateLoginFields';
import validateRegisterFields from '../middleware/validateRegisterFields';
import UserController from '../controller/UserController';

const router = Router();
const controller = new UserController();

router.post('/register', validateRegisterFields, controller.register);
router.post('/login', validateLoginFields, controller.login);
router.get('/:id', controller.findById);

export default router;
