const mongoose = require('../../helpers/connection');
const Schema = mongoose.Schema;
require('mongoose-currency').loadType(mongoose);
const Currency = mongoose.Types.Currency;

//create new model

const productSchema = Schema({
    productID: { type: String, required: true },
    name: { type: String, minlength: 6, maxlength: 50, required: true },
    description: { type: String, maxlength: 3000 },
    price: { type: Currency, required: true },
    categoryID: String,
    createDate: { type: Date, default: Date.now },
    createAccount: String,
    updateDate: { type: Date, default: Date.now },
    updateAccount: String,
    color: [String],
    rate: { type: Number, min: 1, max: 5 },
    image: String,
    enableFlg: { type: Boolean, default: 1 }
});
module.exports = mongoose.model('Product', productSchema);
