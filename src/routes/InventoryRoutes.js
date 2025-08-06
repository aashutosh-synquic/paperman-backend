import express from 'express';
import {
    createInventory,
    getInventories,
    getInventoryById,
    updateInventory,
    deleteInventory
} from '../controllers/InventoryController.js';

const router = express.Router();

router.post('/', createInventory);
router.get('/', getInventories);
router.get('/:id', getInventoryById);
router.put('/:id', updateInventory);
router.delete('/:id', deleteInventory);

export default router;
