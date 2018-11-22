import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const productCategory = {
    categoryID: { type: String, required: true },
    name: { type: String, minlength: 6, maxlength: 50 },
    description: { type: String, maxlength: 255 },
    createDate: { type: Date, default: Date.now },
    createAccount: String,
    updateDate: { type: Date, default: Date.now },
    updateAccount: String,
}

export default mongoose.model('productCategory', Schema(productCategory));
