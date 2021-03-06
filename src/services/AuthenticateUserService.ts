import { getRepository } from 'typeorm';
import { compare, hash } from 'bcryptjs';
import { sign } from 'jsonwebtoken';

import User from '../models/User';

import authConfig from '../config/auth';
import AppError from '../errors/AppError';

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
      throw new AppError('Incorrect login/password');
    }
    const hashedPassword = await hash(login_password, 8);

    const passwordMatched = await compare(user.login_password, hashedPassword);

    if (!passwordMatched) {
      throw new AppError('Incorrect login/password');
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
