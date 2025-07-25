import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    firstname: {
        type: String,
        required: true,
    },
    lastname: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true,
    },
    dob: {
        type: Date,
        required: true,
    },
    contactNumber: {
        type: String,
        required: true,
    },
    aadharNo: {
        type: String,
        required: true,
        unique: true,
    },
    panNo: {
        type: String,
        required: true,
        unique: true,
    },
}, {
    timestamps: true,
});

export default mongoose.model('User', UserSchema);
