import { Entity, Column, PrimaryColumn, ManyToOne } from 'typeorm';
import { Book } from './book.entity';
import { Country } from './Country.entity';

enum book_details_status {
  out_of_stock = 'out_of_stock',
  running_low = 'running_low',
  in_stock = 'in_stock',
}

@Entity()
export class Book_details {
  @PrimaryColumn()
  @ManyToOne(() => Book, (book) => book.id)
  book_id: Book[];

  @PrimaryColumn()
  @ManyToOne(() => Country, (country) => country.currency_code)
  country_code: Country[];

  @Column({ type: 'int', default: 0 })
  stock: number;

  @Column({
    type: 'enum',
    enum: book_details_status,
    default: book_details_status.out_of_stock,
  })
  status: book_details_status;
}
