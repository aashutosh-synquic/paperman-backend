import mongoose from 'mongoose';

const ProductSchema = new mongoose.Schema({
    name: { type: String, required: true },
    category: { type: String, required: [true, "Category is required"] },
    type: { type: String, required: true },
    gsm: { type: Number, required: true },
    unit: { type: String, enum: ["kg", "reel", "ton"], required: [true, "Unit is required"] },
    quantity: { type: Number, required: true },
    price: { type: Number, required: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});

const Product = mongoose.model('Product', ProductSchema);
export default Product;
