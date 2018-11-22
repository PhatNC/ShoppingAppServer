import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const shopInfo = {
    name: { type: String, minlength: 6, maxlength: 50, required: true },
    address: { type: String, required: true },
    phone: { type: String },
    email: { type: String },
    createDate: { type: Date, default: Date.now },
    createAccount: String,
    updateDate: { type: Date, default: Date.now },
    updateAccount: String,
}

export default mongoose.model('shopInfo', Schema(shopInfo));
