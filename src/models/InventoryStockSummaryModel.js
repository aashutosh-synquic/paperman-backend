import mongoose from 'mongoose';

const InventoryStockSummarySchema = new mongoose.Schema({
    productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
    facilityId: { type: mongoose.Schema.Types.ObjectId, ref: 'Facility' }, // Optional
    quantityOnHand: { type: Number, required: true },
    quantityReserved: { type: Number, required: true },
    quantityAvailable: { type: Number, required: true },
    lastUpdated: { type: Date, default: Date.now }
});

const InventoryStockSummary = mongoose.model('InventoryStockSummary', InventoryStockSummarySchema);
export default InventoryStockSummary;
