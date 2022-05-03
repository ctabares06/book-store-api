import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Rol } from './roles.entity';
import { Country } from './Country.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ type: 'varchar' })
  firstname: string;

  @Column({ type: 'varchar' })
  lastname: string;

  @Column({ type: 'varchar' })
  email: string;

  @Column({ type: 'varchar' })
  password: string;

  @ManyToOne(() => Rol, (rol) => rol.id)
  rol: Rol;

  @ManyToOne(() => Country, (country) => country.currency_code)
  country: Country;

  @Column({ type: 'boolean' })
  status: boolean;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
