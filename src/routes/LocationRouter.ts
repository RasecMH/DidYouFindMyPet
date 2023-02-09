import { Router } from 'express';
import validateCreateLocationFields from '../middleware/validateCreateLocationFields';
import LocationController from '../controller/LocationController';
import validateUserToken from '../middleware/validateToken';

const router = Router();
const controller = new LocationController();

router.post('/create', validateCreateLocationFields, controller.create);
router.get('/:id', validateUserToken, controller.findById);
router.get('/all/:petId', validateUserToken, controller.findAllByPetId);

export default router;
