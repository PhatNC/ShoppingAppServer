import mongoose from 'mongoose';

const Schema = mongoose.Schema;

require('mongoose-currency').loadType(mongoose);
var Currency = mongoose.Types.Currency;

export const productInfo = {
    productID: { type: String, required: true },
    name:  { type: String, minlength: 6, maxlength: 50 },
    description: { type: String, maxlength: 255 },
    price: {Currency},
    categoryID: String,
    createDate: { type: Date, default: Date.now },
    createAccount: String,
    updateDate: { type: Date, default: Date.now },
    updateAccount: String,
    color: [String],
    rate: { type: Number, min: 1, max: 5 },
}

export default mongoose.model('productInfo', Schema(productInfo));
