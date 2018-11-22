import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const favoriteProduct = {
    productID: { type: String, required: true },
    accountID: { type: String, required: true },
    createDate: { type: Date, default: Date.now },
    createAccount: String,
    updateDate: { type: Date, default: Date.now },
    updateAccount: String,
}

export default mongoose.model('favoriteProduct', Schema(favoriteProduct));
