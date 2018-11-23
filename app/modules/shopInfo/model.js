const mongoose = require('../../helpers/connection');
const Schema = mongoose.Schema;

//create new model

const shopSchema = Schema({
    name: { type: String, minlength: 6, maxlength: 50, required: true },
    address: { type: String, required: true },
    phone: { type: String },
    email: { type: String },
    createDate: { type: Date, default: Date.now },
    createAccount: String,
    updateDate: { type: Date, default: Date.now },
    updateAccount: String,
});
module.exports = mongoose.model('Shop', shopSchema);
