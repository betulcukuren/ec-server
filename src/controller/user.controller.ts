import { Request, Response } from 'express';
import { getErrorMessage } from '../utils/error.utils';
import * as userServices from '../service/user.service';

export const loginOne = async (req: Request, res: Response) => {
  try {
    const foundUser = await userServices.login(req.body);
    res.status(200).send(foundUser);
  } catch (error) {
    return res.status(500).send(getErrorMessage(error));
  }
 };

export const registerOne = async (req: Request, res: Response) => {
 try {
   await userServices.register(req.body);
   res.status(200).send('Inserted successfully');
 } catch (error) {
   return res.status(500).send(getErrorMessage(error));
 }
};

export const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await userServices.getAll();
    res.status(200).json(users);
  } catch (error) {
    return res.status(500).send(getErrorMessage(error));
  }
 };
