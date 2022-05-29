import { Entity, PrimaryColumn, Column, Unique, OneToMany } from 'typeorm';
import { BookDetails } from './BookDetails.entity';

@Entity('countries')
@Unique('UQ_COUNTRY', ['currencyCode'])
export class Country {
  @PrimaryColumn({ type: 'varchar', nullable: false })
  code: string;

  @Column({ type: 'varchar', nullable: false })
  name: string;

  @Column({
    type: 'varchar',
    name: 'currencyCode',
    nullable: false,
  })
  currencyCode: string;

  @OneToMany(() => BookDetails, (book_details) => book_details.bookId)
  bookStocks: BookDetails[];
}
