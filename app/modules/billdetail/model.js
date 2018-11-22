import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const billDetail = {
    billID: { type: String, required: true },
    productID: { Currency },
    quatity: { type: Number, min: 1, default: 1 },
    createDate: { type: Date, default: Date.now },
    createAccount: String,
    updateDate: { type: Date, default: Date.now },
    updateAccount: String,
}

export default mongoose.model('billDetail', Schema(billDetail));
