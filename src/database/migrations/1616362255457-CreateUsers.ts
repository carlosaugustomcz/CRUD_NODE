import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CreateUsers1616362255457 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'users',
        columns: [
          {
            name: 'login_uuid',
            type: 'varchar',
            isPrimary: true,
          },
          {
            name: 'login_username',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'login_password',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'login_salt',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'login_md5',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'login_sha1',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'login_sha256',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'dob_date',
            type: 'timestamp with time zone',
            isNullable: true,
          },
          {
            name: 'dob_age',
            type: 'int',
            isNullable: true,
          },
          {
            name: 'registered_date',
            type: 'timestamp with time zone',
            isNullable: true,
          },
          {
            name: 'registered_age',
            type: 'int',
            isNullable: true,
          },
          {
            name: 'phone',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'cell',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'id_name',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'id_value',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'picture_large',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'picture_medium',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'picture_thumbnail',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'nat',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'gender',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'name_title',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'name_first',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'name_last',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'location_street',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'location_city',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'location_state',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'location_postcode',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'coordinates_latitude',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'coordinates_longitude',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'timezone_offset',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'timezone_description',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'imported_t',
            type: 'timestamp with time zone',
            default: 'now()',
          },
          {
            name: 'status',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('users');
  }
}
