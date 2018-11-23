const mongoose = require('../../helpers/connection');
const Schema = mongoose.Schema;

export const productCommentSchema = Schema({
    productID: { type: String, required: true },
    accountID: { type: String, required: true },
    comment: { type: String, maxlength: 3000 },
    createDate: { type: Date, default: Date.now },
    createAccount: String,
    updateDate: { type: Date, default: Date.now },
    updateAccount: String,
})
module.exports = mongoose.model('Comment', Schema(productCommentSchema));
