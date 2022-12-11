import { Request, Response } from 'express';
import * as productServices from '../service/product.service';
import { getErrorMessage } from '../utils/error.utils';


export const create = async (req: Request, res: Response) => {
    try {
      const newProduct = await productServices.createProduct(req.body);
      res.status(200).send(newProduct);
    } catch (error) {
      return res.status(500).send(getErrorMessage(error));
    }
   };

export const getProducts = async (req: Request, res: Response) => {
  try {
    const products = await productServices.getAll();
    res.status(200).json(products);
  } catch (error) {
    return res.status(500).send(getErrorMessage(error));
  }
};
