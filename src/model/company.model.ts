import mongoose from "mongoose";

export interface CompanyDocument extends mongoose.Document {
  name: String;
  legalNumber: String;
  incorporationCountry: String;
  website: String;
  createdAt: Date;
  updatedAt: Date;
}

const CompanySchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    legalNumber: { type: String, required: true },
    incorporationCountry: { type: String },
    website: { type: String },
  },
  { timestamps: true }
);


const Company = mongoose.model<CompanyDocument>("Company", CompanySchema);

export default Company;