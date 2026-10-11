import {Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { Entity, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Discount } from './entities/discounts.entity';
import { CreateDiscountDto } from './dto/create-discount.dto';

@Injectable()
    export class DiscountsService {
        constructor(
            @InjectRepository(Discount)
            private readonly discountRepository: Repository<Discount>,
        ) {}

        async create(createDiscountDto: CreateDiscountDto) {
        const existingDiscount = await this.discountRepository.findOne({ where: {code: createDiscountDto.code}});
        if (existingDiscount) throw new BadRequestException('el descuento ya existe');

        const discount = this.discountRepository.create(createDiscountDto);
        return await this.discountRepository.save(discount);
    }

    //obtener todos los cupones
    async findAll() {
        return await this.discountRepository.find();
    }

    //obtener un cupon por id
    async findOne(id: string) {
        const discount = await this.discountRepository.findOneBy({ id });
        if (!discount) throw new NotFoundException('Cupon no encontrada');
        return discount;
    } 

    // eliminar un cupon por id
    async remove(id: string) {
        const discount = await this.findOne(id);
        return await this.discountRepository.remove(discount);
    }


}