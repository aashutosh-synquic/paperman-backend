import InventorySchema from '../models/InventoryModel.js';

// Create a new inventory record
export const createInventory = async (req, res) => {
    try {
        const inventory = new InventorySchema(req.body);
        const savedInventory = await inventory.save();
        res.status(201).json(savedInventory);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Get all inventory records
export const getInventories = async (req, res) => {
    try {
        const inventories = await InventorySchema.find();
        res.status(200).json(inventories);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get an inventory record by ID
export const getInventoryById = async (req, res) => {
    try {
        const inventory = await InventorySchema.findById(req.params.id);
        if (!inventory) return res.status(404).json({ error: 'Inventory not found' });
        res.status(200).json(inventory);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Update an inventory record
export const updateInventory = async (req, res) => {
    try {
        const updatedInventory = await InventorySchema.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedInventory) return res.status(404).json({ error: 'Inventory not found' });
        res.status(200).json(updatedInventory);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Delete an inventory record
export const deleteInventory = async (req, res) => {
    try {
        console.log(req.params.id)
        const deletedInventory = await InventorySchema.findByIdAndDelete(req.params.id);
        if (!deletedInventory) return res.status(404).json({ error: 'Inventory not found' });
        res.status(200).json({ message: 'Inventory deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
