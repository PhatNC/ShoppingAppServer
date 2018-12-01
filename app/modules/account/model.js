const mongoose = require('../../helpers/connection');
const Schema = mongoose.Schema;

const accountSchema = Schema({
  email: { type: String, required: true },
  name: { type: String, },
  password: { type: String, required: true },
  fullName: { type: String },
  address: { type: String },
  phone: { type: String },
  adminFlg: { type: Boolean, default: 0 },
  enableFlg: { type: Boolean, default: 1 },
})

module.exports = mongoose.model('Account', accountSchema);
