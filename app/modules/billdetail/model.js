const mongoose = require('../../helpers/connection');
const Schema = mongoose.Schema;

export const billDetailSchema = Schema({
    billID: { type: String, required: true },
    productID: { type: String, required: true },
    quatity: { type: Number, min: 1, default: 1 },
    createDate: { type: Date, default: Date.now },
    createAccount: String,
    updateDate: { type: Date, default: Date.now },
    updateAccount: String,
})
module.exports = mongoose.model('BillDetail', Schema(billDetailSchema));
