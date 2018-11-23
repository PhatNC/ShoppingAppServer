const mongoose = require('../../helpers/connection');
const Schema = mongoose.Schema;

require('mongoose-currency').loadType(mongoose);
const Currency = mongoose.Types.Currency;

//create new model

const billSchema = Schema({
    accountID: { type: String, required: true },
    totalPrice: { Currency },
    createDate: { type: Date, default: Date.now },
    createAccount: String,
    updateDate: { type: Date, default: Date.now },
    updateAccount: String,
});
module.exports = mongoose.model('Bill', billSchema);
