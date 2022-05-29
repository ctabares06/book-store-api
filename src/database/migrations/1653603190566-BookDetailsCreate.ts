import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export class BookDetailsCreate1653603190566 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'bookDetails',
        columns: [
          {
            name: 'id',
            type: 'int',
            isGenerated: true,
            generationStrategy: 'increment',
            isPrimary: true,
          },
          {
            name: 'bookId',
            type: 'int',
          },
          {
            name: 'countryCode',
            type: 'varchar',
          },
          {
            name: 'stock',
            type: 'int',
            isNullable: false,
          },
          {
            name: 'status',
            type: 'enum',
            enumName: 'bookDetail_status',
            enum: ['out_of_stock', 'running_low', 'in_stock'],
            default: "'out_of_stock'",
          },
        ],
      }),
      true,
    );

    await queryRunner.createForeignKey(
      'bookDetails',
      new TableForeignKey({
        columnNames: ['bookId'],
        referencedColumnNames: ['id'],
        referencedTableName: 'books',
        onDelete: 'CASCADE',
      }),
    );

    await queryRunner.createForeignKey(
      'bookDetails',
      new TableForeignKey({
        columnNames: ['countryCode'],
        referencedColumnNames: ['code'],
        referencedTableName: 'countries',
        onDelete: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    const table = await queryRunner.getTable('bookDetails');
    await queryRunner.dropForeignKeys('bookDetails', table.foreignKeys);
    await queryRunner.dropTable('bookDetails', true);
  }
}
