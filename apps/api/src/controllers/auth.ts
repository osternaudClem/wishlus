import type { Request, Response } from 'express';
import { User } from '../models/user';
import {
  sendErrorBadRequest,
  sendErrorForbidden,
  sendErrorNotFound,
  sendErrorServer,
  sendSuccess,
  sendSuccessCache,
} from '../utils/responseUtils';

interface AuthUser {
  email: string;
  password: string;
}

interface AuthGoogle {
  email: string;
  name: string;
  picture: string;
  provider: string;
  providerAccountId: string;
}

export const loginWithGoogle = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { email, name, picture, provider, providerAccountId } =
    req.body as AuthGoogle;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      const newUser = new User({
        email,
        username: name,
        avatar: picture,
        provider,
        providerAccountId,
      });
      await newUser.save();
      sendSuccessCache({ res, datas: newUser });
      return;
    }

    if (
      user.provider !== provider ||
      user.providerAccountId !== providerAccountId
    ) {
      sendErrorForbidden({
        res,
        error: `this account is not linked to ${provider}`,
      });
      return;
    }

    sendSuccessCache({ res, datas: user });
  } catch (error) {
    sendErrorServer({ res, error: error as string });
  }
};

export const login = async (req: Request, res: Response): Promise<void> => {
  const { email, password } = req.body as AuthUser;

  if (!email || !password) {
    sendErrorBadRequest({ res, error: 'email or password missing' });
  }

  try {
    const user = await User.findOne({ email }).select('+password');

    if (!user) {
      sendErrorNotFound({ res, error: 'user not found' });
    }

    const isValidPass = user?.password === password;

    if (!isValidPass) {
      sendErrorForbidden({ res, error: 'invalid password' });
    }

    sendSuccessCache({ res, datas: user });
  } catch (error) {
    sendErrorServer({ res, error: error as string });
  }
};

export const registration = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const user = new User(req.body);
    await user.save();
    sendSuccess({ res, datas: user });
  } catch (error) {
    res.status(500).send(error);
  }
};

export default { login, loginWithGoogle, registration };
