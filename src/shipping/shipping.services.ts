import {Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { Entity, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Shipping } from './entities/shipping.entity';
import { CreateShippingDto } from './dto/create-shipping.dto';

@Injectable()
    export class ShippingService {
        constructor(
            @InjectRepository(Shipping)
            private readonly shippingRepository: Repository<Shipping>,
        ) {}de

        async create(createShippingDto: CreateShippingDto) {
        const existingShipping = await this.shippingRepository.findOne({ where: { orderId: createShippingDto.orderId}});
        if (existingShipping) throw new BadRequestException('la orden ya existe');

        const shipping = this.shippingRepository.create(createShippingDto);
        return await this.shippingRepository.save(shipping);
    }

    //obtener todos los ordenes
    async findAll() {
        return await this.shippingRepository.find();
    }

    //obtener una orden por id
    async findOne(id: string) {
        const shipping = await this.shippingRepository.findOneBy({ id });
        if (!shipping) throw new NotFoundException('Orden no encontrada');
        return shipping;
    } 

    // eliminar una orden por id
    async remove(id: string) {
        const shipping = await this.findOne(id);
        return await this.shippingRepository.remove(shipping);
    }


}