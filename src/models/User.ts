import {
  Entity,
  Column,
  PrimaryColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('users')
class User {
  @PrimaryColumn('uuid')
  login_uuid: string;

  @Column()
  login_username: string;

  @Column()
  login_password: string;

  @Column()
  login_salt: string;

  @Column()
  login_password: string;

  @Column()
  login_md5: string;

  @Column()
  login_sha1: string;

  @Column()
  login_sha256: string;

  @Column()
  dob_date: Date;

  @Column()
  dob_age: number;

  @Column()
  registered_date: Date;

  @Column()
  registered_age: number;

  @Column()
  phone: string;

  @Column()
  cell: string;

  @Column()
  id_name: string;

  @Column()
  id_value: string;

  @Column()
  picture_large: string;

  @Column()
  picture_medium: string;

  @Column()
  picture_thumbnail: string;

  @Column()
  nat: string;

  @Column()
  gender: string;

  @Column()
  name_title: string;

  @Column()
  name_first: string;

  @Column()
  name_last: string;

  @Column()
  location_street: string;

  @Column()
  location_city: string;

  @Column()
  location_state: string;

  @Column()
  location_postcode: string;

  @Column()
  coordinates_latitude: string;

  @Column()
  coordinates_longitude: string;

  @Column()
  timezone_offset: string;

  @Column()
  timezone_description: string;

  @CreateDateColumn()
  imported_t: Date;

  @Column()
  status: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default User;
