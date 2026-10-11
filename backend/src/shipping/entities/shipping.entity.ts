import {
    Entity,
    Column,
    PrimaryGeneratedColumn
} from 'typeorm';


@Entity('shipping')
    export class Shipping{
        @PrimaryGeneratedColumn("uuid")
        id: string;


    @Column()
    orderId: string;

    @Column()
    address: string;

    @Column()
    city: string;

    @Column()
    postalCode: string;

    @Column()
    country: string;

    @Column()
    status: string; // 'pending', 'shipped', 'delivered'


}

