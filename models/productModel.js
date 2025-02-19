// models/productModel.js
import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  inventoryCount: { type: Number, required: true }
});

const Product = mongoose.model('Product', productSchema);

export default Product;
