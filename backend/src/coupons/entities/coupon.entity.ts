import {
    Entity, PrimaryColumn, Column, CreateDateColumn,
    PrimaryGeneratedColumn
} from 'typeorm'

@Entity('coupons')
export class Coupon {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({unique: true})
    code: string;

    @Column('int')
    discount: number;

    @Column({type: 'timestamp'})
    expirationDate: Date;

}