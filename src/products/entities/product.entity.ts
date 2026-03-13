import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
@Entity('products')
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  price: number;

  @Column()
  imageUrl: string;

  @Column({type:'enum', enum: ['simple', 'variable'], default: 'simple'})
  type: string;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  regularPrice: number;

  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: true })
  salePrice: number;

  @Column({ unique: true })
  sku: string;

  @Column({default: 0})
  stock_quantity: number;

  @Column({ default: true })
  is_visible: boolean;
}