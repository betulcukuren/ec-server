import mongoose from "mongoose";
import { CompanyDocument } from "./company.model";

export interface ProductDocument extends mongoose.Document {
  name: String;
  category: String;
  amount: Number;
  amountUnit: String;
  company: CompanyDocument["_id"];
  createdAt: Date;
  updatedAt: Date;
}

const ProductSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    category: { type: String, required: true },
    amount: { type: Number, required: true },
    amountUnit: { type: String, required: true },
    company: { type: mongoose.Schema.Types.ObjectId, ref: "Company" },
  },
  { timestamps: true }
);


const Product = mongoose.model<ProductDocument>("Product", ProductSchema);

export default Product;