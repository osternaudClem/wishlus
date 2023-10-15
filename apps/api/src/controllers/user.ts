import type { Request, Response } from 'express';
import type { UserDocument } from '../models/user';
import { User } from '../models/user';
import { sendSuccess } from '../utils/responseUtils';

export const getUsers = async (_req: Request, res: Response): Promise<void> => {
  try {
    const users = await User.find();
    sendSuccess({ res, datas: users });
  } catch (error) {
    res.status(500).send(error);
  }
};

export const getUserById = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const user = await User.findById(req.params.id);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).send(error);
  }
};

export const updateUser = async (
  req: Request<{ id: string }, unknown, Partial<UserDocument>>,
  res: Response
): Promise<void> => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json(user);
  } catch (error) {
    res.status(500).send(error);
  }
};

export const deleteUser = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(204).send();
  } catch (error) {
    res.status(500).send(error);
  }
};

export default {
  getUsers,
  getUserById,
  updateUser,
  deleteUser,
};
