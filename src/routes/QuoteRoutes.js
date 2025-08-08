import express from 'express';
import { requestQuote } from '../controllers/QuoteController.js';

const router = express.Router();

router.post('/', requestQuote);

export default router;
