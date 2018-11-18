import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const model = {
  name: String,
  price: String,
  product_img_url: String,
}

export default mongoose.model('Authenication', Schema(authen));
