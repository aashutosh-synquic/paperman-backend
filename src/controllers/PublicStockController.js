import Product from '../models/ProductModel.js';
import Inventory from '../models/InventoryModel.js';
import Category from '../models/CategoryModel.js';

// GET /api/stock
export const getPublicStock = async (req, res) => {
    try {
        // Fetch all categories
        const categories = await Category.find({}, { _id: 1, name: 1, description: 1 });

        // Fetch all products
        const products = await Product.find({}, { __v: 0 });

        // Fetch all inventory
        const inventories = await Inventory.find({}, { __v: 0 });

        // Group products by category
        const categoryMap = {};
        categories.forEach(cat => {
            categoryMap[cat._id.toString()] = { ...cat.toObject(), products: [] };
        });

        // Map inventory by productId for quick lookup
        const inventoryMap = {};
        inventories.forEach(inv => {
            const pid = inv.productId.toString();
            if (!inventoryMap[pid]) inventoryMap[pid] = [];
            inventoryMap[pid].push(inv);
        });

        // Attach inventory to products and group by category
        products.forEach(prod => {
            const prodObj = prod.toObject();
            prodObj.inventory = inventoryMap[prod._id.toString()] || [];
            // Find category by name or _id
            let cat = categories.find(
                c => c.name === prod.category || c._id.toString() === prod.category
            );
            if (cat) {
                const catId = cat._id.toString();
                if (!categoryMap[catId].products) categoryMap[catId].products = [];
                categoryMap[catId].products.push(prodObj);
            }
        });

        // Prepare response: array of categories, each with products (each with inventory)
        const result = Object.values(categoryMap);

        res.json({
            categories: result,
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
