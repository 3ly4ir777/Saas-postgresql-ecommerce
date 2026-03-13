import {
    Entity,
    Column,
    PrimaryGeneratedColumn

} from 'typeorm';

@Entity('discounts')
    export class Discount{
        @PrimaryGeneratedColumn("uuid")
        id: string;

    @Column({unique: true})
    code: string;


    @Column({unique: true})
    percentage: number;

    @Column()
    discount: number;

    @Column({type: 'timestamp'})
    expirationDate: Date;

}

