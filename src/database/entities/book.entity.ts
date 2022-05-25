import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  Unique,
  ManyToMany,
  JoinTable,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';
import { Book_details } from './book_details.entity';
import { Genre } from './genre.entity';
import { Order_items } from './order_items.entity';
import { User } from './user.entity';

@Entity()
@Unique('UQ_BOOK', ['title'])
export class Book {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ type: 'varchar', nullable: false })
  title: string;

  @Column({ type: 'varchar', nullable: false })
  author: string;

  @Column({ type: 'float', nullable: false })
  price: number;

  @ManyToOne(() => User, (user) => user.id)
  seller: User;

  @ManyToMany(() => Genre, (genre) => genre.id, {
    cascade: ['insert'],
  })
  @JoinTable({ name: 'book_genres' })
  genre: Genre[];

  @OneToMany(() => Book_details, (book_details) => book_details.bookDetailId)
  bookStocks: Book_details[];

  @OneToMany(() => Order_items, (order_item) => order_item.book)
  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @Column({ type: 'boolean', nullable: false, default: false })
  status: boolean;
}
