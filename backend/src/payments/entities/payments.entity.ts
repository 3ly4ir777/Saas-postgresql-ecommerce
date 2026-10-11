import {
    Entity,
    Column,
    PrimaryGeneratedColumn
} from 'typeorm';


@Entity('payments')
    export class Payments{
        @PrimaryGeneratedColumn("uuid")
        id: string;


    @Column('decimal', { precision: 10, scale: 2 })
    amount: number;

    @Column('decimal', { precision: 10, scale: 2 })
    totalAmount: number;

    @Column()
    status: string; // 'pending', 'successed, 'failed'

    @Column({nullable: true})
    gatewayTransactionId: string; //el id de la transaccion del payments

    @Column()
    paymentGateway: string; // 'paypal', 'stripe', etc.

}

