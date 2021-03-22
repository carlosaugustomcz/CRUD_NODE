import { getRepository } from 'typeorm';
import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';

import User from '../models/User';

import authConfig from '../config/auth';
import AppError from '../erros/AppError';

interface Request {
  login_uuid: string;
  login_password: string;
}

interface Response {
  user: User;
  token: string;
}

class AuthenticateUserService {
  public async execute({
    login_uuid,
    login_password,
  }: Request): Promise<Response> {
    const usersRepository = getRepository(User);

    const user = await usersRepository.findOne({ where: { login_uuid } });

    if (!user) {
      throw new AppError('login Incorreto');
    }

    const passwordMatched = await compare(login_password, user.login_password);

    console.log(login_password);
    console.log(user.login_password);

    if (!passwordMatched) {
      throw new AppError('password Incorreto');
    }

    const { secret, expiresIn } = authConfig.jwt;

    const token = sign({}, secret, {
      subject: user.login_uuid,
      expiresIn,
    });

    return {
      user,
      token,
    };
  }
}

export default AuthenticateUserService;
