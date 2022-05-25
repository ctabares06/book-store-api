import { Entity, PrimaryColumn, Column, Unique, OneToMany } from 'typeorm';
import { Book_details } from './book_details.entity';

@Entity('country')
@Unique('UQ_COUNTRY', ['currency_code'])
export class Country {
  @PrimaryColumn({ type: 'varchar', nullable: false })
  code: string;

  @Column({ type: 'varchar', nullable: false })
  name: string;

  @Column({ type: 'varchar', name: 'currency_code', nullable: false })
  currency_code: string;

  @OneToMany(() => Book_details, (book_details) => book_details.bookId)
  bookStocks: Book_details[];
}
