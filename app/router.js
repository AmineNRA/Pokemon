import express from 'express';
import controller from './controller.js';

const router = express.Router();


router.get('/', controller.home);
router.get('/categories', controller.category);

export default router;