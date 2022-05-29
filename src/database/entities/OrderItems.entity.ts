import { Entity, Column, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Order } from './Order.entity';
import { Book } from './Book.entity';

@Entity('orderItems')
export class Order_items {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column('int')
  orderId: number;

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
