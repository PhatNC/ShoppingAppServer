const mongoose = require('../../helpers/connection');
const Schema = mongoose.Schema;

//create new model

const productCategorySchema = Schema({
    categoryID: { type: String, required: true },
    name: { type: String, minlength: 6, maxlength: 50, required: true },
    description: { type: String, maxlength: 255 },
    createDate: { type: Date, default: Date.now },
    createAccount: String,
    updateDate: { type: Date, default: Date.now },
    updateAccount: String,
});
module.exports = mongoose.model('Category', productCategorySchema);
