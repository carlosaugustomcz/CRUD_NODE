// import { getRepository } from 'typeorm';
import fetch from 'node-fetch';

// import User from '../models/User';

class UserService {
  public async execute(data: JSON): Promise<void> {
    // const usersRepository = getRepository(User);
    // fetch('https://randomuser.me/api/?page=3&results=1')
    //   .then(resposta => resposta.json())
    //   .then(resposta => console.log(resposta.results));
    // return listUsuarios;
    // console.log(listUsuarios);
    //    const user = usersRepository.create({});
    //    await usersRepository.save(user);
    //    return user;
    console.log(data);
  }
}

export default UserService;
