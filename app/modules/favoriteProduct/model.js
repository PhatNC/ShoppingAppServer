const mongoose = require('../../helpers/connection');
const Schema = mongoose.Schema;

export const favoriteProductSchema = Schema({
    productID: { type: String, required: true },
    accountID: { type: String, required: true },
    createDate: { type: Date, default: Date.now },
    createAccount: String,
    updateDate: { type: Date, default: Date.now },
    updateAccount: String,
})
module.exports = mongoose.model('FavoriteProduct', Schema(favoriteProductSchema));
