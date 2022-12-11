import ProductModel, { ProductDocument } from '../model/product.model';

export async function createProduct(product: ProductDocument): Promise<void> {
 try {
   await ProductModel.create(product);
 } catch (error) {
   throw error;
 }
}

export async function getAll() {
  const users = await ProductModel.find().exec();
  return users;
};
