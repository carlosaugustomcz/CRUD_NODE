import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class assign1616962574946 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'assign',
        columns: [
          {
            name: 'hora',
            type: 'varchar',
            isNullable: true,
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('assign');
  }
}
