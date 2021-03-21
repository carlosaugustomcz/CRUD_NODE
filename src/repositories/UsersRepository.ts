import { EntityRepository, Repository } from 'typeorm';

import User from '../models/User';

@EntityRepository(User)
class UsersRepository extends Repository<User> {
  public async deleteUser(login_uuid: string): Promise<void> {
    await this.delete(login_uuid);
  }
}

export default UsersRepository;
