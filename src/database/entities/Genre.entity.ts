import { Column, Entity, PrimaryGeneratedColumn, Unique } from 'typeorm';

@Entity('genres')
@Unique('UQ_GENRE', ['name'])
export class Genre {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ type: 'varchar', nullable: false })
  name: string;
}
