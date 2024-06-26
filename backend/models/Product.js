import mongoose from 'mongoose';
const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  description: String,
});

export const Product = mongoose.model('Product', productSchema);