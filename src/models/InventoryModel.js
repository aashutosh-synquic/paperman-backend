import mongoose from 'mongoose';

const InventorySchema = new mongoose.Schema({
    productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
    quantity: { type: Number, default: 100 },
    date: { type: Date, default: Date.now },
    remarks: { type: String },
    status: { type: String, enum: ["active", "inactive"], required: true }
});

const Inventory = mongoose.model('Inventory', InventorySchema);
export default Inventory;
