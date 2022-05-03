import { Column, Entity, PrimaryGeneratedColumn, Unique } from 'typeorm';

@Entity()
@Unique('UQ_GENRE', ['name'])
export class Genre {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ type: 'varchar' })
  name: string;
}
