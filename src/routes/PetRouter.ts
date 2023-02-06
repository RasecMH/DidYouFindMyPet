import { Router } from 'express';
import validateCreatePetFields from '../middleware/validateCreatePetFields';
import validateUserToken from '../middleware/validateToken';
import PetController from '../controller/PetController';

const router = Router();
const controller = new PetController();

router.post('/create', validateCreatePetFields, validateUserToken, controller.create);
router.get('/:id', controller.findById);

export default router;
