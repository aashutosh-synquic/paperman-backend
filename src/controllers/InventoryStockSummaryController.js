import mongoose from 'mongoose';
import InventoryStockSummary from '../models/InventoryStockSummaryModel.js';
import Product from '../models/ProductModel.js';

// Sum up all inventory types by product ID
export const sumInventoryByProductId = async (req, res) => {
    try {
        const productId = req.params.productId;
        const inventoryData = await InventoryStockSummary.aggregate([
            { $match: { productId: mongoose.Types.ObjectId(productId) } },
            {
                $group: {
                    _id: "$productId",
                    totalQuantityOnHand: { $sum: "$quantityOnHand" },
                    totalQuantityReserved: { $sum: "$quantityReserved" },
                    totalQuantityAvailable: { $sum: "$quantityAvailable" }
                }
            }
        ]);

        if (inventoryData.length === 0) {
            return res.status(404).json({ message: 'No inventory data found for the given product ID' });
        }

        // Update the Product table with the summed inventory data
        const productUpdate = await Product.findByIdAndUpdate(
            productId,
            {
                $set: {
                    totalQuantityOnHand: inventoryData[0].totalQuantityOnHand,
                    totalQuantityReserved: inventoryData[0].totalQuantityReserved,
                    totalQuantityAvailable: inventoryData[0].totalQuantityAvailable
                }
            },
            { new: true }
        );

        res.status(200).json({ inventoryData: inventoryData[0], updatedProduct: productUpdate });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Sum up all inventory types across all products
// returns total quantities for all products
export const sumInventoryAllProducts = async (req, res) => {
    try {
        const inventoryData = await InventoryStockSummary.aggregate([
            {
                $group: {
                    _id: null,
                    totalQuantityOnHand: { $sum: "$quantityOnHand" },
                    totalQuantityReserved: { $sum: "$quantityReserved" },
                    totalQuantityAvailable: { $sum: "$quantityAvailable" }
                }
            }
        ]);
        if (inventoryData.length === 0) {
            return res.status(404).json({ message: 'No inventory data found' });
        }
        res.status(200).json({ inventoryData: inventoryData[0] });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};