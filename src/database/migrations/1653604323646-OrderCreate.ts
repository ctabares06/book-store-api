import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export class OrderCreate1653604323646 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'orders',
        columns: [
          {
            name: 'id',
            type: 'int',
            isGenerated: true,
            generationStrategy: 'increment',
            isPrimary: true,
          },
          {
            name: 'clientId',
            type: 'int',
          },
          {
            name: 'sellerId',
            type: 'int',
          },
          {
            name: 'orderDate',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'deliveryDate',
            type: 'date',
            isNullable: false,
          },
          {
            name: 'totalPrice',
            type: 'float',
            isNullable: false,
          },
          {
            name: 'status',
            type: 'enum',
            enum: ['sent', 'pending', 'delivered', 'refund'],
            enumName: 'order_status',
            default: "'pending'",
          },
        ],
      }),
      true,
    );

    await queryRunner.createForeignKey(
      'orders',
      new TableForeignKey({
        columnNames: ['clientId'],
        referencedColumnNames: ['id'],
        referencedTableName: 'users',
        onDelete: 'CASCADE',
      }),
    );

    await queryRunner.createForeignKey(
      'orders',
      new TableForeignKey({
        columnNames: ['sellerId'],
        referencedColumnNames: ['id'],
        referencedTableName: 'users',
        onDelete: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    const table = await queryRunner.getTable('orders');
    await queryRunner.dropForeignKeys('orders', table.foreignKeys);
    await queryRunner.dropTable('orders', true);
  }
}
