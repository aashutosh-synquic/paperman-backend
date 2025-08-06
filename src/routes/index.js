import express from 'express';
import CategoryRoutes from './CategoryRoutes.js';
import InventoryRoutes from './InventoryRoutes.js';
import InventoryStockSummaryRoutes from './InventoryStockSummaryRoutes.js'
import ProductRoutes from './ProductRoutes.js';
import UserRoutes from './userRoutes.js';
import { authenticate } from '../middlewares/authMiddleware.js';
const router = express.Router();

router.use(authenticate)

router.get('/', (req, res) => {
    res.json({ message: 'Welcome to the API' });
});

router.use('/categories', CategoryRoutes);
router.use('/inventory', InventoryRoutes);
router.use('/inventory-stock-summary', InventoryStockSummaryRoutes);
router.use('/products', ProductRoutes);
router.use('/users', UserRoutes);

export default router;
