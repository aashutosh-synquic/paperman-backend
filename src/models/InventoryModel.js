import mongoose from 'mongoose';
import { type } from 'os';

const InventorySchema = new mongoose.Schema({
    productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
    quantity: { type: Number, default: 100 },
    item_length: { type: Number, required: true },
    item_width: { type: Number, required: true },
    item_lw_unit: { type: String, enum: ["cm", "inch"], required: true },
    weight: { type: Number, required: true },
    status: { type: String, enum: ["active", "inactive"], required: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});

const Inventory = mongoose.model('Inventory', InventorySchema);
export default Inventory;
