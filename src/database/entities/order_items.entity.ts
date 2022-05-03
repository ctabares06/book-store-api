import { Entity, PrimaryColumn, Column, OneToMany } from 'typeorm';
import { Order } from './order.entity';
import { Book } from './book.entity';

@Entity()
export class Order_items {
  @PrimaryColumn()
  @OneToMany(() => Order, (order) => order.id)
  order: Order;

  @PrimaryColumn()
  @OneToMany(() => Book, (book) => book.id)
  book: Book;

  @Column({ type: 'int' })
  quantity: number;

  @Column({ type: 'float' })
  price: number;
}
