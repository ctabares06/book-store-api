import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  ManyToMany,
  JoinTable,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';
import { BookDetails } from './BookDetails.entity';
import { Genre } from './Genre.entity';
import { Order_items } from './OrderItems.entity';
import { User } from './User.entity';

@Entity('books')
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
  @JoinTable({ name: 'bookGenres' })
  genre: Genre[];

  @OneToMany(() => BookDetails, (book_details) => book_details.id)
  bookStocks: BookDetails[];

  @OneToMany(() => Order_items, (order_item) => order_item.book)
  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @Column({ type: 'boolean', nullable: false, default: false })
  status: boolean;
}
