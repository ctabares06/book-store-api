import { Entity, Column, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Book } from './Book.entity';
import { Country } from './Country.entity';

enum book_details_status {
  out_of_stock = 'out_of_stock',
  running_low = 'running_low',
  in_stock = 'in_stock',
}

@Entity('bookDetails')
export class BookDetails {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column('int')
  bookId: number;

  @Column('int')
  countryCode: string;

  @ManyToOne(() => Book, (book) => book.id)
  book: Book[];

  @ManyToOne(() => Country, (country) => country.currencyCode)
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
