import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const account = {
  email: String,
  password: String,
}

export default mongoose.model('Account', Schema(account));
