import { EntityRepository, Repository } from 'typeorm';

import User from '../models/User';

import AppError from '../errors/AppError';

@EntityRepository(User)
class UsersRepository extends Repository<User> {
  public async deleteUser(userId: string): Promise<void> {
    await this.delete(userId);
  }

  public async updateUser(userupdate: User, userId: string): Promise<void> {
    const users = await this.findOne(userId);
    if (!users) {
      throw new AppError('Usuário não existe.');
    }

    await this.save(this.merge(users, userupdate));
  }
}

export default UsersRepository;
