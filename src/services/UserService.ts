import { getRepository } from 'typeorm';

import User from '../models/User';

import AppError from '../erros/AppError';

interface Request {
  userId: string;
}

class UserService {
  /* public async remove({ userId }: Request): Promise<User> {
    const usersRepository = getRepository(User);

    const checkUserExists = await usersRepository.findOne({
      where: { userId },
    });

    if (!checkUserExists) {
      throw new AppError('Usuário não existe.');
    }

    await usersRepository.delete(checkUserExists);
  } */
}
