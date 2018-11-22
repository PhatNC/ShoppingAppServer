var mongoose = require('../../helpers/connection');
var Schema = mongoose.Schema;
require('mongoose-currency').loadType(mongoose);
var Currency = mongoose.Types.Currency;

//create new model

var productSchema = Schema({
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

// import mongoose from 'mongoose';

// const Schema = mongoose.Schema;

// require('mongoose-currency').loadType(mongoose);
// var Currency = mongoose.Types.Currency;

// export const productInfo = {
//     productID: { type: String, required: true },
//     name: { type: String, minlength: 6, maxlength: 50, required: true },
//     description: { type: String, maxlength: 255 },
//     price: { type: Currency, required: true },
//     categoryID: String,
//     createDate: { type: Date, default: Date.now },
//     createAccount: String,
//     updateDate: { type: Date, default: Date.now },
//     updateAccount: String,
//     color: [String],
//     rate: { type: Number, min: 1, max: 5 },
// }

// export default mongoose.model('productInfo', Schema(productInfo));
