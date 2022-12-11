import mongoose from "mongoose";

export interface CompanyDocument extends mongoose.Document {
  name: String;
  legalNumber: Number;
  incorporationCountry: String;
  website: String;
  createdAt: Date;
  updatedAt: Date;
}

const CompanySchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    legalNumber: { type: String, required: true },
    incorporationCountry: { type: String, required: true },
    website: { type: String, required: true },
  },
  { timestamps: true }
);


const Company = mongoose.model<CompanyDocument>("Company", CompanySchema);

export default Company;