import mongoose from 'mongoose';

const Schema = mongoose.Schema;
require('mongoose-currency').loadType(mongoose);
var Currency = mongoose.Types.Currency;

export const bill = {
    accountID: { type: String, required: true },
    totalPrice: {Currency},
    createDate: { type: Date, default: Date.now },
    createAccount: String,
    updateDate: { type: Date, default: Date.now },
    updateAccount: String,
}

export default mongoose.model('bill', Schema(bill));
