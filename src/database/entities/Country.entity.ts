import { Entity, PrimaryColumn, Column, Unique, OneToMany } from 'typeorm';
import { Book_details } from './book_details.entity';

@Entity('country')
@Unique('UQ_COUNTRY', ['currency_code'])
export class Country {
  @PrimaryColumn({ type: 'varchar' })
  id: string;

  @Column({ type: 'varchar' })
  name: string;

  @Column({ type: 'varchar', name: 'currency_code' })
  currency_code: string;

  @OneToMany(() => Book_details, (book_details) => book_details.book_id)
  bookStocks: Book_details[];
}
