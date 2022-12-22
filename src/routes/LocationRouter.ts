import { Router } from 'express';
import validateCreateLocationFields from '../middleware/validateCreateLocationFields';
import LocationController from '../controller/LocationController';

const router = Router();
const controller = new LocationController();

router.post('/create', validateCreateLocationFields, controller.create);
router.get('/:id', controller.findById);
router.get('/:petId', controller.findAllByPetId);

export default router;
