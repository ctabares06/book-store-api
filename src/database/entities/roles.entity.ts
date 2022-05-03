import { Entity, PrimaryGeneratedColumn, Column, Unique } from 'typeorm';

@Entity()
@Unique('UQ_ROL', ['name'])
export class Rol {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ type: 'varchar' })
  name: string;

  @Column({ type: 'varchar' })
  status: boolean;
}
