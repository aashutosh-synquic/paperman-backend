import express from 'express';
import {
    sumInventoryByProductId,
    sumInventoryAllProducts
} from '../controllers/InventoryStockSummaryController.js';

const router = express.Router();

router.get('/sum', sumInventoryAllProducts);
router.get('/sum/:productId', sumInventoryByProductId);

export default router;
