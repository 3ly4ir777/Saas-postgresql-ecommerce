import {
    Entity,
    Column,
    PrimaryGeneratedColumn
} from 'typeorm';


@Entity('taxes')
    export class Taxes{
        @PrimaryGeneratedColumn("uuid")
        id: string;


    @Column()
    name: string;

    @Column()
    rate: number;


}

