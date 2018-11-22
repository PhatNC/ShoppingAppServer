import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const productComment = {
    productID: { type: String, required: true },
    accountID: { type: String, required: true },
    comment: { type: String, maxlength: 3000 },
    createDate: { type: Date, default: Date.now },
    createAccount: String,
    updateDate: { type: Date, default: Date.now },
    updateAccount: String,
}

export default mongoose.model('productComment', Schema(productComment));
