import CompanyModel, { CompanyDocument } from '../model/company.model';

export async function createCompany(company: CompanyDocument): Promise<void> {
 try {
   await CompanyModel.create(company);
 } catch (error) {
   throw error;
 }
}

export async function getAll() {
  const users = await CompanyModel.find().exec();
  return users;
};
