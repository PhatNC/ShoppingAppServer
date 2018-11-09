import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const authen = {
  username: String,
  password: String,
}

export default mongoose.model('Authenication', Schema(authen));
