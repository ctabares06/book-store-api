import { Entity, PrimaryColumn, Column, ManyToOne } from 'typeorm';
import { Order } from './order.entity';
import { Book } from './book.entity';

@Entity()
export class Order_items {
  @PrimaryColumn()
  @Column('int')
  postId: number;

  @PrimaryColumn()
  @Column('int')
  bookId: number;

  @ManyToOne(() => Order, (order) => order.id)
  order: Order;

  @ManyToOne(() => Book, (book) => book.id)
  book: Book;

  @Column({ type: 'int', nullable: false })
  quantity: number;

  @Column({ type: 'float', nullable: false })
  price: number;
}
