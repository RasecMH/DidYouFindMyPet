import { Router } from 'express';
import CitiesController from '../controller/CitiesController';

const router = Router();
const controller = new CitiesController();

router.get('/search', controller.findByQuery);
router.get('/:id', controller.findById);

export default router;
