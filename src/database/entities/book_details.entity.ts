import {
  Entity,
  Column,
  PrimaryColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Book } from './book.entity';
import { Country } from './Country.entity';

enum book_details_status {
  out_of_stock = 'out_of_stock',
  running_low = 'running_low',
  in_stock = 'in_stock',
}

@Entity()
export class Book_details {
  @PrimaryGeneratedColumn('increment')
  bookDetailId: number;

  @PrimaryColumn()
  @Column('int')
  bookId: number;

  @PrimaryColumn()
  @Column('int')
  countryId: number;

  @ManyToOne(() => Book, (book) => book.id)
  book: Book[];

  @ManyToOne(() => Country, (country) => country.currency_code)
  country: Country[];

  @Column({ type: 'int', default: 0, nullable: false })
  stock: number;

  @Column({
    type: 'enum',
    enum: book_details_status,
    default: book_details_status.out_of_stock,
  })
  status: book_details_status;
}
