import { getRepository } from 'typeorm';

import User from '../models/User';

interface Request {
  userId: string;
}

class UserService {
  public async remove({ userId }: Request): Promise<User> {
    const usersRepository = getRepository(User);

    const checkUserExists = await usersRepository.findOne({
      where: { userId },
    });

    console.log(checkUserExists);

    if (!checkUserExists) {
      throw Error('Usuário não existe.');
    }

    await usersRepository.delete(checkUserExists);
  }
}

export default UserService;
