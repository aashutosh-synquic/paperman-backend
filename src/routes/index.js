import express from 'express';
import CategoryRoutes from './CategoryRoutes.js';
import InventoryRoutes from './InventoryRoutes.js';
import ProductRoutes from './ProductRoutes.js';
import UserRoutes from './userRoutes.js';
import QuoteRoutes from './QuoteRoutes.js';
import { authenticate } from '../middlewares/authMiddleware.js';
const router = express.Router();
import { getPublicStock } from '../controllers/PublicStockController.js';

router.get('/', (req, res) => {
    res.json({ message: 'Welcome to the API' });
});
router.get('/stock', getPublicStock);
router.use('/quote', QuoteRoutes);

router.use(authenticate);

router.use('/categories', CategoryRoutes);
router.use('/inventory', InventoryRoutes);
router.use('/products', ProductRoutes);
router.use('/users', UserRoutes);

export default router;
