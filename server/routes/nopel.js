import express from 'express';

import { getAllNopel, getNopel, createNopel, updateNopel, deleteNopel } from '../controllers/nopel.js';

const router = express.Router();

router.get('/', getAllNopel);
router.get('/:nopel', getNopel);
router.post('/', createNopel);
router.patch('/:nopel', updateNopel);
router.delete('/', deleteNopel);

export default router;