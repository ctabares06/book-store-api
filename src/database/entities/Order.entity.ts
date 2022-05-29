import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  CreateDateColumn,
} from 'typeorm';
import { User } from './User.entity';

enum order_status {
  sent = 'sent',
  pending = 'pending',
  delivered = 'delivered',
  refund = 'refund',
}

@Entity('orders')
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn()
  orderDate: Date;

  @Column({ type: 'date', nullable: false })
  deliveryDate: Date;

  @Column({ type: 'float', nullable: false })
  totalPrice: number;

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
