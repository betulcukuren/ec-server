import { Request, Response } from 'express';
import * as companyServices from '../service/company.service';
import { getErrorMessage } from '../utils/error.utils';


export const create = async (req: Request, res: Response) => {
  try {
    const foundUser = await companyServices.createCompany(req.body);
    res.status(200).send(foundUser);
  } catch (error) {
    return res.status(500).send(getErrorMessage(error));
  }
};

export const getCompanies = async (req: Request, res: Response) => {
  try {
    const companies = await companyServices.getAll();
    res.status(200).json(companies);
  } catch (error) {
    return res.status(500).send(getErrorMessage(error));
  }
};
