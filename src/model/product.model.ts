import mongoose from "mongoose";
import { CompanyDocument } from "./company.model";

export interface ProductDocument extends mongoose.Document {
  name: String;
  category: String;
  amount: String;
  amountUnit: String;
  company: CompanyDocument["_id"];
  createdAt: Date;
  updatedAt: Date;
}

const ProductSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    category: { type: String },
    amount: { type: String, required: true },
    amountUnit: { type: String, required: true },
    company: { type: mongoose.Schema.Types.ObjectId, ref: "Company", required: true },
  },
  { timestamps: true }
);


const Product = mongoose.model<ProductDocument>("Product", ProductSchema);

export default Product;