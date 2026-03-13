import {
    Entity,
    Column,
    PrimaryGeneratedColumn
} from 'typeorm';

export enum OrderStatus {
    PENDING = 'pending',
    PAID = 'paid',
    SHIPPED = 'shipped',
    DELIVERED = 'delivered',
    CANCELLED = 'cancelled'
}

@Entity('orders')
    export class Orders{
        @PrimaryGeneratedColumn("uuid")
        id: string;


    @Column({unique: true})
    orderNumber: string;

    @Column('decimal', { precision: 10, scale: 2 })
    totalAmount: number;

    @Column({type: 'enum', enum: OrderStatus, default: OrderStatus.PENDING})
    status: string;

}

