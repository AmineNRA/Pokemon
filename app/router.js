import express from 'express';
import controller from './controller.js';
import middleware from './middleware.js';

const router = express.Router();


router.get('/', controller.home);
router.get('/categories', controller.category);
router.get('/categories/:type', controller.type);

export default router;