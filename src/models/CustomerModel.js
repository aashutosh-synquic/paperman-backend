import mongoose from 'mongoose';

const CustomerSchema = new mongoose.Schema({
    name: { type: String, required: true },
    type: { type: String, enum: ["buyer", "supplier", "both"], required: true },
    contactPerson: { type: String },
    phone: { type: String },
    email: { type: String },
    gstNumber: { type: String },
    address: { type: String },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});

const Customer = mongoose.model('Customer', CustomerSchema);
export default Customer;
