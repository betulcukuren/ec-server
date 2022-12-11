import { Express, Request, Response } from "express";
import * as userController from './controller/user.controller';
import * as companyController from './controller/company.controller';
import * as  productController from './controller/product.controller';


export default function (app: Express) {
  app.get('/healthcheck', (req: Request, res: Response) => res.sendStatus(200));

  app.get('/companies', companyController.getCompanies);
  app.get('/products', productController.getProducts);
  app.post('/login', userController.loginOne);
  app.post('/register', userController.registerOne);
  app.get('/users', userController.getUsers);
}