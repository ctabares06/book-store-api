import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  CreateDateColumn,
} from 'typeorm';
import { User } from './user.entity';

enum order_status {
  sent = 'sent',
  pending = 'pending',
  delivered = 'delivered',
  refund = 'refund',
}

@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn()
  order_date: Date;

  @Column({ type: 'date', nullable: false })
  delivery_date: Date;

  @Column({ type: 'float', nullable: false })
  total_price: number;

  @ManyToOne(() => User, (user) => user.id)
  client: User;

  @ManyToOne(() => User, (user) => user.id)
  seller: User;

  @Column({
    type: 'enum',
    enum: order_status,
    default: order_status.pending,
    nullable: false,
  })
  status: order_status;
}
