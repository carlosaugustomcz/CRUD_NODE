import { getRepository } from 'typeorm';
import fetch from 'node-fetch';

import User from '../models/User';

class UserService {
  public async execute(): Promise<void> {
    const usersRepository = getRepository(User);
    const assingRepository = getRepository(assing);

    for (let i = 0; i < 2000; i++) {
      fetch(`https://randomuser.me/api/?page=${i}&results=1`)
        .then(resposta => {
          if (resposta.ok) {
            return resposta.json();
          }

          return Promise.reject({
            status: resposta.status,
            statusText: resposta.statusText,
          });
        })
        .then(resposta => {
          const res = resposta.results[0];
          const model = {
            login_uuid: res.login.uuid,
            login_username: res.login.username,
            login_password: res.login.password,
            login_salt: res.login.salt,
            login_md5: res.login.md5,
            login_sha1: res.login.sha1,
            login_sha256: res.login.sha256,
            email: res.email,
            gender: res.gender,
            name_title: res.name.title,
            name_first: res.name.first,
            name_last: res.name.last,
            location_city: res.location.city,
            location_state: res.location.state,
            location_country: res.location.country,
            location_postcode: res.location.postcode,
            location_latitude: res.location.coordinates.latitude,
            location_longitude: res.location.coordinates.longitude,
            timezone_offset: res.location.timezone.offset,
            timezone_description: res.location.timezone.description,
            dob_date: res.dob.date,
            dob_age: res.dob.age,
            registered_date: res.registered.date,
            registered_age: res.registered.age,
            phone: res.phone,
            cell: res.cell,
            id_name: res.id.name,
            id_value: res.id.value,
            picture_large: res.picture.large,
            picture_medium: res.picture.medium,
            picture_thumbnail: res.picture.thumbnail,
            nat: res.nat,
            status: 'published',
          };

          const modelUser = usersRepository.create(model);
          usersRepository.save(modelUser);
        })
        .catch(err => console.log('Error, with message:', err.statusText));
    }
  }
}

export default UserService;
